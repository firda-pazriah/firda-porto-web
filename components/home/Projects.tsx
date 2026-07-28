import Accent from "../accent";
import Badge from "../ui/badge";

const projects = [
  {
    id: "1",
    name: "Dibalik Udang",
    company: "eFishery",
    year: "2021",
    description:
      "Internal admin dashboard to manage aquaculture products, inventory, pricing, and product information.",
    tech: ["React", "TailwindCSS", "TypeScript", "Sentry", "Vitest"],
  },
  {
    id: "2",
    name: "Budibase Order Platform",
    company: "eFishery",
    year: "2021",
    description:
      "Web-based order management system developed to facilitate product processing.",
    tech: ["Budibase"],
  },
  {
    id: "3",
    name: "Ajaib.co.id Landing Page",
    company: "Ajaib",
    year: "2020",
    description:
      "Responsive investment platform landing page showcasing financial products and features.",
    tech: ["WordPress"],
    demo: true,
  },
  {
    id: "4",
    name: "Travious",
    company: "Basajans",
    year: "2018",
    description:
      "Mobile travel app for viewing trip schedules, route plans, and itineraries.",
    tech: ["React Native", "Expo", "Jest"],
  },
  {
    id: "5",
    name: "Touress.com",
    company: "Basajans",
    year: "2018",
    description:
      "Travel and tourism platform for discovering, booking, and managing trips via ticketing and bundled packages.",
    tech: ["React Native", "Expo", "Jest"],
    demo: true,
  },
  {
    id: "6",
    name: "Bebeclub Reward Web",
    company: "Salt",
    year: "2018",
    description:
      "Loyalty rewards platform enabling customers to earn, track, and redeem points.",
    tech: ["React Native", "Expo", "Jest"],
    demo: true,
  },
  {
    id: "7",
    name: "Housing Facility Management Web",
    company: "MII",
    year: "2017",
    description:
      "Housing management system for residential administration, occupancy, and maintenance operations.",
    tech: ["C#", "PHP CodeIgniter", "SQL Server"],
  },
  {
    id: "8",
    name: "Web Portal Pertamina II Dumai",
    company: "MII",
    year: "2018",
    description:
      "Digital portal improving accessibility to information and operational workflows for employees.",
    tech: ["C#", "PHP CodeIgniter", "SQL Server"],
  },
  {
    id: "9",
    name: "Starbridge",
    company: "Indocyber Global Technology",
    year: "2016",
    description:
      "HR management system streamlining payroll processing, employee approvals, and workforce administration.",
    tech: ["C#", "SQL Server"],
  },
  {
    id: "10",
    name: "Jaya Real Properti Web Profile",
    company: "OWL & Foxes",
    year: "2016",
    description:
      "Company profile website for a real estate business showcasing listings and services.",
    tech: ["PHP CodeIgniter"],
    demo: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          More Projects
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
          Featured Technical Works
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
        A curated collection of frontend engineering projects, covering scalable
        applications, component-driven development, performance optimization,
        and modern web experiences.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-20 sm:gap-6 lg:max-w-4xl lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-accent/50 rounded-xl p-4 space-y-4 h-full outline-1 outline-offset-5"
          >
            <span className="text-indigo-400 text-sm font-semibold">
              {project.year}
            </span>
            <h1 className="font-medium text-lg">
              {project.name} |{" "}
              <span className="text-indigo-400">{project.company}</span>
            </h1>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex gap-2">
              {project.tech.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
