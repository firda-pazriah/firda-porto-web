"use client";

import Accent from "../../accent";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../ui/field";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { submitMessage } from "./action";
import { useActionState } from "react";
import Script from "next/script";
import { FormActionState } from "@/types/form-type";

const initialState: FormActionState = { error: null, success: false };

export default function ContactMe() {
  const [state, formAction, isPending] = useActionState(
    submitMessage,
    initialState,
  );
  return (
    <section id="contact" className="bg-background">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 dark:bg-accent dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
          <Accent position="bottom" />
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Contact me
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-muted-foreground">
              Have a project proposal, job opportunity, or technical question?
              Send me a message and I&apos;ll get back to you shortly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="text-sm/6 font-semibold text-white hover:text-gray-100"
              >
                Linkedin
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative w-full mt-16 lg:mt-8 py-8">
            <form action={formAction}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                  <FieldDescription>
                    We&apos;ll use this to contact you. We will not share your
                    email with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Job Opportunities"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Hi, Firda..."
                    required
                  />
                </Field>
                <div
                  className="cf-turnstile"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                />
                {state.error && <p role="alert">{state.error}</p>}
                {state.success && (
                  <p>Thanks! I&apos;ll get back to you soon.</p>
                )}
                <FieldGroup>
                  <Field>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "Sending..." : "Send"}
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
