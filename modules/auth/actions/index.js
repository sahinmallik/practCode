"use server";

import { db } from "@/lib/db";

import { currentUser } from "@clerk/nextjs/server";
import { LucideChartNoAxesColumnIncreasing } from "lucide-react";
import { success } from "zod";

export const onboardUser = async () => {
  try {
    const User = await currentUser();

    if (!User) {
      return { success: false, error: "User Not Found" };
    }

    const { id, firstName, lastName, imageUrl, emailAddresses } = User;
    if (!emailAddresses?.length || !emailAddresses[0]?.emailAddress) {
      return { success: false, error: "User email not found" };
    }
    const newUser = await db.user.upsert({
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

export const currentUserRole = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, error: "User Not Found" };
    }
    const { id } = user;

    const userRole = await db.user.findUnique({
      where: {
        clerkId: id,
      },
      select: {
        role: true,
      },
    });
    return { success: true, userRole };
  } catch (error) {
    console.error("Message: ", error);
    return { success: false, error: "Internal Server Error" };
  }
};
