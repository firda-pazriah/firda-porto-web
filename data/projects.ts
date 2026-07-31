import { Project } from "@/types/project-type";

export const projects: Project[] = [
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
