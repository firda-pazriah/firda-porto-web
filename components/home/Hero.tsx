"use client";

import Accent from "../accent";

export default function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <Accent position="left" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-8xl">
              Firda Pazriah
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Frontend Engineer specializing in
              <span className="text-indigo-400 font-bold">
                {" "}
                web performance & security,{" "}
              </span>
              currently building
              <span className="text-indigo-400 font-bold"> Sellmate</span> from
              the ground up — an LLM-powered productivity suite for e-commerce
              sellers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-foreground">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <Accent />
        </div>
      </div>
    </section>
  );
}
