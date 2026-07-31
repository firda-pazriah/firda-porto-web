"use server";

import { prisma } from "@/lib/db";
import { FormActionState } from "@/types/form-type";
import { profileSchema } from "@/types/schema/profileSchema";

const GENERIC_ERROR = "Something went wrong. Please try again.";

async function verifyTurnstileToken(token: string | null): Promise<boolean> {
  if (!token) return false;

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("TURNSTILE_SECRET_KEY envitonment variable is not set.");
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    },
  );

  const data: { success: boolean } = await response.json();
  return data.success;
}

export async function submitProfileToDownload(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const turnstileToken = formData.get("cf-turnstile-response") as string | null;
  const isHuman = await verifyTurnstileToken(turnstileToken);

  if (!isHuman) {
    return {
      error: "Verification failed. Please try again.",
      success: false,
    };
  }
  const result = profileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  try {
    await prisma.profile.create({ data: result.data });
  } catch (error) {
    console.error("Failed to save profile", error);
    return { error: GENERIC_ERROR, success: false };
  }

  return { error: null, success: true };
}
