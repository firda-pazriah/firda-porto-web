import { Code, Hammer, Puzzle } from "lucide-react";

const features = [
  {
    name: "The Problem.",
    description:
      "Sellers patch gaps left by free ERP tools with spreadsheets and manual WhatsApp checks.",
    icon: Puzzle,
  },
  {
    name: "What I'm buiilding.",
    description:
      "An 8-module suite spanning review analysis, order alerts, WhatsApp order capture, and more — shared across web and mobile from one monorepo.",
    icon: Hammer,
  },
  {
    name: "Technical Highlights.",
    description:
      "Next.js, TypeScript, React, React Native, LLM integration, Clerk, Supabase",
    icon: Code,
  },
];

export default function Sellmate() {
  return (
    <section
      id="sellmate"
      className="overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                Featured Project
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                Sellmate
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                A seller productivity suite that fills the gaps free e-commerce
                ERP tools leave behind — order capture, review analysis, and
                task tracking, built from problems I&apos;ve faced running my
                own shop.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:ml-0"
          />
        </div>
      </div>
    </section>
  );
}
