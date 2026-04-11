/** Characters for the hover “bubble” title animation */
export const nameBubbleChars = [..."Roy Chon"];

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
    org: "Amazon Web Services (AWS)",
    orgUrl: "https://aws.amazon.com/",
    logoSrc: "/logos/amazon_web_services_logo.jpeg",
    period: "Spring 2026",
    title: "Software Development Engineer Intern",
    detail: "Working on distributed systems at Amazon CloudWatch.",
  },
  {
    org: "BitGo",
    orgUrl: "https://www.bitgo.com/",
    logoSrc: "/logos/bitgo_logo.png",
    period: "Winter 2026",
    title: "Software Engineering Intern",
    detail: "Built identity verification workflows on the Crypto as a Service team.",
  },
  {
    org: "Faire",
    orgUrl: "https://www.faire.com/",
    logoSrc: "/logos/faire_logo.png",
    period: "Spring 2025",
    title: "Software Engineering Intern",
    detail: "Worked on growth at an online wholesale marketplace.",
  },
  {
    org: "Vivid Seats",
    orgUrl: "https://www.vividseats.com/",
    logoSrc: "/logos/vivid_seats_logo.jpg",
    period: "Fall 2024",
    title: "Software Engineering Intern",
    detail: "Re-engineered sports category pages and improved web speed.",
  },
  {
    org: "WSIB",
    orgUrl: "https://www.wsib.ca/en",
    logoSrc: "/logos/wsib_logo.webp",
    period: "Winter 2024",
    title: "Full Stack Developer Intern",
    detail: "Built internal tools with generative AI for a provincial workplace insurer.",
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
