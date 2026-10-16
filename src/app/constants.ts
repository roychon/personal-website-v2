export type WorkEntry = {
  org: string;
  orgUrl?: string;
  logoSrc: string;
  period: string;
  title: string;
  detail: string;
};

export type ProjectEntry = {
  name: string;
  stack: string;
  blurb: string;
};

export const workEntries: WorkEntry[] = [
  {
    org: "Databricks",
    orgUrl: "https://www.databricks.com/",
    logoSrc: "/logos/databricks_logo.jpeg",
    period: "Winter 2027",
    title: "Software Engineering Intern",
    detail: "Incoming winter 2027.",
  },
  {
    org: "Amazon Web Services (AWS)",
    orgUrl: "https://aws.amazon.com/",
    logoSrc: "/logos/amazon_web_services_logo.jpeg",
    period: "Spring 2026",
    title: "Software Development Engineer Intern",
    detail: "AI agents for CloudWatch pipelines.",
  },
  {
    org: "BitGo",
    orgUrl: "https://www.bitgo.com/",
    logoSrc: "/logos/bitgo_logo.png",
    period: "Winter 2026",
    title: "Software Engineering Intern",
    detail: "Identity verification workflows on the Crypto as a Service team.",
  },
  {
    org: "Faire",
    orgUrl: "https://www.faire.com/",
    logoSrc: "/logos/faire_logo.png",
    period: "Spring 2025",
    title: "Software Engineering Intern",
    detail: "Onboarding workflows on the retailer growth pod.",
  },
  {
    org: "Vivid Seats",
    orgUrl: "https://www.vividseats.com/",
    logoSrc: "/logos/vivid_seats_logo.jpg",
    period: "Fall 2024",
    title: "Software Engineering Intern",
    detail: "Sports category pages and web speed.",
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    name: "Sports modeling experiments",
    stack: "python, notebooks",
    blurb: "Personal ML projects aimed at modeling sports markets—mostly learning in public.",
  },
  {
    name: "More on GitHub",
    stack: "various",
    blurb: "Smaller tools and coursework live in repos; start here for code.",
  },
];
