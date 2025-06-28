"use server";

import { signIn, signOut } from "@/auth";
import { signInSchema } from "../constants/schema";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// sign inuser creditental

export async function signInUserCredentials(
  formData: FormData,
  prevState: unknown
) {
  try {
    const user = signInSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // sign in user
    await signIn("credentials", user);

    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      return error;
    }

    return {
      success: false,
      message: "Invalid credentials",
    };
  }
}


// sign  out users 

export async function signOutUser(){
    await signOut();
}
