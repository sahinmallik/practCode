import { db } from "@/lib/db";
import { getJudge0Id, pullBatchResults, submitBatch } from "@/lib/judge0";
import { currentUserRole } from "@/modules/auth/actions";
import { currentUser } from "@clerk/nextjs/server";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // get all the fields from the client side
    // basic validations
    //Run a loop for each lang ----> number of testcases
    // Get the judge0 language id for the current lang
    //submit all the test cases in one batch
    //extract tokens from response

    const userRole = await currentUserRole();
    const user = await getCurrentUser();

    if (userRole !== UserRole.ADMIN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      testCases,
      codeSnippets,
      referenceSolutions,
    } = body;

    if (
      !title ||
      !description ||
      !difficulty ||
      !testCases ||
      !codeSnippets ||
      !referenceSolutions
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!Array.isArray(testCases) || testCases.length === 0) {
      return NextResponse.json(
        { error: "At least one testcase is required" },
        { status: 400 }
      );
    }

    if (!referenceSolutions || typeof referenceSolutions !== "object") {
      return NextResponse.json(
        {
          error:
            "Reference solutions must be provided for all supported languages",
        },
        { status: 400 }
      );
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      // Get judge0 language id for the current language
      const langId = getJudge0Id(language);
      if (!langId) {
        return NextResponse.json(
          { error: `Unsupported Language: ${language}` },
          { status: 400 }
        );
      }

      //prepare the judge0 submission for all the testcases

      const submission = testCases.map((testcase) => {
        const { input, output } = testcase;
        return {
          source_code: solutionCode,
          language_id: langId,
          stdin: input,
          expected_output: output,
        };
      });

      //submit all the testacases in one batch to save the api requests

      const submissionResults = await submitBatch(submission);

      const tokens = submissionResults.map((res) => res.token);

      const results = await pullBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.status.id !== 3) {
          return NextResponse.json(
            {
              error: `Validation failed for ${language}`,
              testCase: {
                input: results[i].stdin,
                expectedOutput: results[i].expected_output,
                actualOutput: result.stdout,
                error: result.stderr || result.compile_output,
              },
              details: result,
            },
            { status: 400 }
          );
        }
      }
    }
    //step 3 save the problem into the db

    const newProblem = await db.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testCases,
        codeSnippets,
        referenceSolutions,
        userId: user.id,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Problem Created Successfully",
        data: newProblem,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Occured: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const getCurrentUser = async () => {
  const user = await currentUser();
  const dbUser = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      id: true,
    },
  });

  return dbUser;
};
