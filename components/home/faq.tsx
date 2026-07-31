import { Code, Hammer, Puzzle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through email or LinkedIn. Feel free to reach out about full-time roles, collaborations, or just to connect — I'll get back to you as soon as possible.",
  },
  {
    question: "What are you currently working on?",
    answer:
      "I'm currently building Sellmate, a seller productivity suite for Southeast Asian e-commerce sellers — an 8-module system covering everything from WhatsApp order capture to team management, built with Next.js, TypeScript, and React Native in a Turborepo monorepo.",
  },
  {
    question: "What's your specialization?",
    answer:
      "I specialize in frontend engineering with a focus on web performance and security — building fast, reliable interfaces while ensuring they're built on solid, secure foundations. I care about both what users experience and what happens under the hood.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My core stack is React, Next.js, TypeScript, and React Native, with Turborepo for monorepo architecture. On the performance side, I work with Core Web Vitals, code splitting, and tools like Lighthouse and PageSpeed Insights. For security, I focus on secure auth flows (Clerk, Better Auth), CSP, and XSS prevention.",
  },
  {
    question: "Are you available for remote work?",
    answer:
      "Yes — I'm based in Indonesia (GMT+7) and comfortable working with distributed teams across time zones, using tools like GitHub, Slack, Notion, and async communication workflows.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Yes. I'm comfortable stepping into existing projects — understanding current architecture, improving code quality, fixing issues, and shipping new features while keeping things consistent with the existing system.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">FAQ</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                Frequently asked questions
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                Find quick answers about my working preferences, availability,
                skills, and background.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none"></dl>
            </div>
          </div>
          <div>
            <Accordion
              defaultValue={["How can I contact you?"]}
              className="max-w-lg"
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
