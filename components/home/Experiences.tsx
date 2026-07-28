"use client";
import { useRef, useState } from "react";
import Accent from "../accent";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Experience = {
  role: string;
  company: string;
  industry: string | null;
  period: string;
  achievements: string[];
};

const experience: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "eFishery",
    industry: "AgriTech",
    period: "Dec 2021 - Feb 2025",
    achievements: [
      "Built and launched Toko Budidaya from the ground up as sole Frontend Engineer, growing GMV and reaching 1,000+ active users.",
      "Built an order management system from scratch, reducing order cycle time by 50%.",
      "Developed an internal CRM platform that improved complaint resolution speed by 10x, from 10 days to 2 days within two quarters.",
      "Earned two engineering-level promotions based on consistent performance and technical contributions.",
      "Recognized as a Top Performer for high-impact engineering contributions.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Ajaib",
    industry: "FinTech",
    period: "Mar 2020 - Nov 2021",
    achievements: [
      "Built core investment features including Portfolio Management, Payment Integration, and Stock Buy/Sell workflows.",
      "Implemented real-time stock market data updates using WebSocket, optimizing frontend performance for a smooth trading experience.",
      "Contributed to testing strategy and code quality through unit testing and code reviews.",
      "Supported A/B testing experiments, analytics tracking, and feature flagging.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Basajans",
    industry: null,
    period: "Nov 2018 - Feb 2020",
    achievements: [
      "Developed and maintained cross-platform mobile applications for Android and iOS using React Native.",
      "Implemented new features and integrated mobile apps with backend APIs; wrote unit tests to improve reliability.",
      "Managed app deployment and release processes for Google Play Store and Apple App Store.",
      "Collaborated with Product, Design, Backend, and QA teams and participated in code reviews.",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "MII",
    industry: null,
    period: "Aug 2017 - Aug 2018",
    achievements: [
      "Delivered custom software solutions for enterprise clients, including digital transformation projects for PT Pertamina.",
      "Developed web-based business applications and internal operational systems.",
      "Implemented backend services, business logic, and database integrations.",
      "Worked closely with business stakeholders, project managers, and development teams across the full project lifecycle.",
    ],
  },
];

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section
      id="experiences"
      className="relative isolate bg-background py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <Accent position="center" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">My Career</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
          Work Experience
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
        A record of my professional journey in software engineering role
      </p>
      <div className="w-full mt-16">
        <div className="flex items-center justify-center gap-2 mb-10">
          {experience.map((exp, index) => (
            <Button
              key={exp.company}
              onClick={() => handleSelect(index)}
              variant={activeIndex === index ? "default" : "outline"}
            >
              {exp.company}
            </Button>
          ))}
        </div>
        <div
          className="flex items-center gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-10
          px-[calc(50%-9rem)]
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {experience.map((exp, index) => (
            <div
              key={exp.company}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleSelect(index)}
              className={cn(
                "w-88 shrink-0 snap-center rounded-xl outline-1 outline-offset-5 bg-card p-6 text-card-foreground shadow-sm cursor-pointer transition-all duration-300 ease-out",
                activeIndex === index
                  ? "scale-105 opacity-100 shadow-lg z-10"
                  : "scale-90 opacity-50",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-indigo-400 font-medium text-sm mt-1">
                {exp.company}
                {exp.industry ? ` · ${exp.industry}` : ""}
              </p>
              <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>

              <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
                {exp.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
