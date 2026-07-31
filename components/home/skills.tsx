import {
  Brain,
  ChartBar,
  Monitor,
  Rocket,
  Server,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Core",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "TailwindCSS",
      "Styled-components",
    ],
    icon: Monitor,
  },
  {
    category: "Monorepo & Tooling",
    items: ["Turborepo"],
    icon: Wrench,
  },
  {
    category: "Auth & Security",
    items: [
      "Clerk",
      "Better Auth",
      "XSS Prevention",
      "CSP",
      "Secure Session Management",
    ],
    icon: Shield,
  },
  {
    category: "Web Performance",
    items: [
      "Core Web Vitals",
      "Lazy Loading",
      "React Server Components",
      "Lighthouse",
      "PageSpeed Insights",
      "GTmetrix",
    ],
    icon: Rocket,
  },
  {
    category: "State Management",
    items: ["Zustand", "Context API", "Redux Toolkit"],
    icon: Server,
  },
  {
    category: "Testing",
    items: ["Jest", "Vitest"],
    icon: Zap,
  },
  {
    category: "AI & LLM",
    items: ["LLM Integration", "Claude Code", "Cursor", "Google Antigravity"],
    icon: Brain,
  },
  {
    category: "Analytics & Monitoring",
    items: ["Sentry", "Amplitude"],
    icon: ChartBar,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Tech Stack
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl lg:text-balance">
            Skills & Proficiencies
          </p>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            A breakdown of my technical toolkit, structured by specialization
            from software development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {skills.map((item) => (
              <div key={item.category} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-foreground">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {item.category}
                </dt>
                <dd className="mt-2 text-base/7 text-muted-foreground">
                  {item.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
