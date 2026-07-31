"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/toast";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormActionState } from "@/types/form-type";
import { submitProfileToDownload } from "./action";

const initialState: FormActionState = { error: null, success: false };
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string | undefined },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export function DialogDownloadResume() {
  const [state, formAction, isPending] = useActionState(
    submitProfileToDownload,
    initialState,
  );
  const [open, setOpen] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  function renderTurnstile() {
    if (!window.turnstile || !turnstileRef.current || widgetIdRef.current) {
      return;
    }
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
    });
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen) {
      // container mounts this render pass; wait a tick before rendering into it
      requestAnimationFrame(renderTurnstile);
    } else if (widgetIdRef.current) {
      window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }
  }

  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleOpenChange(false);

      toast.add({
        type: "success",
        description: "Your request has been sent.",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.success]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => open && renderTurnstile()}
      />
      <DialogTrigger render={<Button variant="outline">Request CV</Button>} />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Almost there!</DialogTitle>
          <DialogDescription>
            Just need your name and email so I know who&apos;s checking out my
            resume — I&apos;ll send you a copy directly too.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="johndoe@example.com"
              />
            </Field>
          </FieldGroup>
          <div ref={turnstileRef} />
          {state.error && <p role="alert">{state.error}</p>}
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">
              {isPending ? "Requesting..." : "Request CV"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
