"use client";
import { useRef, useState } from "react";
import Accent from "../../accent";
import { Button } from "../../ui/button";
import ExperienceCard from "./experience-card";
import { experiences } from "@/data/experiences";

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
          {experiences.map((exp, index) => (
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
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleSelect(index)}
              className={
                activeIndex === index
                  ? "scale-105 opacity-100 shadow-lg z-10"
                  : "scale-90 opacity-50"
              }
              data={exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
