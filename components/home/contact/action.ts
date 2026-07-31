"use server";

import { waitUntil } from "@vercel/functions";
import { Resend } from "resend";
import { contactSchema } from "@/types/schema/contactSchema";
import { prisma } from "@/lib/db";
import { FormActionState } from "@/types/form-type";

const resend = new Resend(process.env.RESEND_API_KEY);
const GENERIC_ERROR = "Something went wrong. Please try again.";
const production = process.env.VERCEL;

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

async function sendContactMessagetoEmail() {
  resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: "efeffirda@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    })
    .catch((error) =>
      console.error("Failed to send notification email:", error),
    );
}

export async function submitMessage(
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

  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  try {
    await prisma.contactMessage.create({ data: result.data });
  } catch (error) {
    console.error("Failed to save contact message", error);
    return { error: GENERIC_ERROR, success: false };
  }

  if (production) {
    waitUntil(sendContactMessagetoEmail());
  } else {
    await sendContactMessagetoEmail();
  }

  return { error: null, success: true };
}
