"use client";
import Stat from "../ui/stat";
const links = [
  { name: "GitHub", url: "https://github.com/firda-pazriah" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/firda-pazriah" },
];
const stats = [
  { name: "years engineering", value: "9+" },
  { name: "projects", value: "10+" },
  { name: "product, 0 to 1", value: "1" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden  py-24 sm:py-32 bg-background"
    >
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-foreground animate-fade-in">
            About Me
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-300 animate-fade-in">
            I&apos;m planning my comeback to the tech industry after a 1.5-year
            career break. After being laid off from my 9-year engineering
            career, I chose to take that time to focus on being a mom. That
            season gave me space to rediscover my love for building things — and
            the months since, I&apos;ve spent relearning and sharpening my
            skills. Now I&apos;m ready to bring that energy to a remote frontend
            role.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold sm:grid-cols-2 md:flex lg:gap-x-10 text-indigo-600 dark:text-indigo-400">
            {links.map((link) => (
              <a key={link.name} href={link.url} target="_blank">
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Stat key={stat.name} name={stat.name} value={stat.value} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
