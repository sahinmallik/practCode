import { db } from "@/lib/db";

import { currentUser } from "@clerk/nextjs/server";

export const onboardUser = async () => {
  try {
    const User = await currentUser();

    if (!User) {
      return { success: false, error: "User Not Found" };
    }

    const { id, firstName, lastName, imageUrl, emailAddresses } = User;

    const newUser = await db.User.upsert({
      where: {
        clerkId: id,
      },
      update: {
        firstName: firstName || null,
        lastName: lastName || null,
        imageUrl: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
      },
      create: {
        clerkId: id,
        firstName: firstName || null,
        lastName: lastName || null,
        imageUrl: imageUrl || null,
        email: emailAddresses[0]?.emailAddress,
      },
    });

    return {
      success: true,
      user: newUser,
      message: "User Onboarded successfully",
    };
  } catch (err) {
    console.error("Error in the onboarding process", err);
    return { success: false, error: "Failed to onboard user" };
  }
};
