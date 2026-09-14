import animeladImage from "../assets/images/projects/animelad.png";
import jobApplyTrackerImage from "../assets/images/projects/jobapplytracker.png";
import kudiTrackImage from "../assets/images/projects/kuditrack.png";
import pulseHubImage from "../assets/images/projects/pulsehub.png";

export type ProjectStatus =
  | "shipped"
  | "evolving"
  | "offline";

export type ProjectVersion = {
  label: string;
  description: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectPost = {
  title: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;

  status: ProjectStatus[];
  currentVersion: string;

  technologies: string[];

  versions: ProjectVersion[];

  whatILearned: string[];

  futureImprovements: string[];

  links: ProjectLink[];

  posts: ProjectPost[];
};

export const projects: Project[] = [
  {
    id: "animelad",
    name: "AnimeLad",
    tagline: "My first serious React product",
    description:
      "An anime discovery application that evolved from a frontend React project into my first full-stack application.",

    image: animeladImage,
    status: ["evolving"],
    currentVersion: "V2",

    technologies: [
      "React",
      "JavaScript",
      "GraphQL",
      "AniList API",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],

    versions: [
      {
        label: "V1",
        description:
          "Frontend-only React application using the AniList GraphQL API.",
      },
      {
        label: "V2",
        description:
          "Reworked into a full-stack application with an Express backend, API proxying, authentication, and MongoDB.",
      },
    ],

    whatILearned: [
      "React",
      "Working with external APIs",
      "GraphQL",
      "API integration",
      "Backend architecture",
      "CORS",
      "Service-based backend structure",
      "MongoDB",
      "Authentication",
    ],

    futureImprovements: [
      "Reconnect the V2 frontend and backend",
      "Improve the UI and overall UX",
      "Refine the authentication experience",
      "Complete and improve the watchlist experience",
      "Add complete authentication and authorization flows",
    ],

    links: [
      {
        label: "V1 GitHub",
        href: "https://github.com/ladosky1/Anime-Finder-App",
      },
      {
        label: "V1 Live",
        href: "https://animelad.netlify.app/",
      },
      {
        label: "V2 GitHub",
        href: "https://github.com/ladosky1/AnimeSearchApp",
      },
      {
        label: "V2 Frontend",
        href: "https://animelad-v2.vercel.app/",
      },
      {
        label: "V2 Backend",
        href: "https://animelad.onrender.com",
      },
    ],

    posts: [
      {
        title: "AnimeLad progress",
        href: "https://x.com/ladosky__/status/2032413707800637662",
      },
      {
        title: "AnimeLad development",
        href: "https://x.com/ladosky__/status/2007921756124917955",
      },
    ],
  },

  {
    id: "job-apply-tracker",
    name: "JobApplyTracker",
    tagline: "This project take me deep into CRUD and application workflows.",
    description:
      "A job application tracking application that started as a frontend project focused on CRUD and later evolved into a full-stack application with authentication and persistent backend data.",
    image: jobApplyTrackerImage,
    status: ["evolving"],
    currentVersion: "V2",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],

    versions: [
      {
        label: "V1",
        description:
          "Frontend application focused on CRUD operations, job management, filtering, and persistent client-side data.",
      },
      {
        label: "V2",
        description:
          "Reworked into a full-stack application with authentication, Express, MongoDB, and backend CRUD operations.",
      },
    ],

    whatILearned: [
      "CRUD architecture",
      "React state management",
      "Data persistence",
      "REST APIs",
      "Express",
      "MongoDB",
      "Authentication",
      "JWT",
      "Frontend-backend integration",
    ],

    futureImprovements: [
      "Token expiration handling",
      "Stronger password policies",
      "Email verification",
      "Forgot password flow",
      "Interview reminders",
      "Analytics dashboard",
      "CSV/Excel export",
    ],

    links: [
      {
        label: "V1 GitHub",
        href: "https://github.com/ladosky1/job-apply-tracker",
      },
      {
        label: "V1 Live",
        href: "https://jobapplytracker.netlify.app/",
      },
      {
        label: "V2 GitHub",
        href: "https://github.com/ladosky1/JobApplyTracker-v2",
      },
      {
        label: "V2 Frontend",
        href: "https://jobapplytracker-v2-1.onrender.com/",
      },
      {
        label: "V2 Backend",
        href: "https://jobapplytracker-v2.onrender.com/",
      },
    ],

    posts: [
      {
        title: "JobApplyTracker progress",
        href: "https://x.com/ladosky__/status/2050976557460553743",
      },
      {
        title: "JobApplyTracker development",
        href: "https://x.com/ladosky__/status/2018274526291743145",
      },
    ],
  },

  {
    id: "kuditrack",
    name: "KudiTrack",
    tagline: "My first serious TypeScript project.",
    description:
      "A personal finance tracker built while moving deeper into TypeScript, structured UI systems, authentication, and data visualization.",
    image: kudiTrackImage,
    status: ["offline"],
    currentVersion: "V1",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Mantine",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Recharts",
    ],

    versions: [
      {
        label: "V1",
        description:
          "A full-stack personal finance tracker with authentication, transaction management, smart transaction input, and data visualization.",
      },
    ],

    whatILearned: [
      "TypeScript",
      "Type-safe React development",
      "UI component systems",
      "Authentication",
      "Transaction CRUD",
      "Data visualization",
      "Recharts",
      "React Context",
      "Smart input parsing",
      "Deployment",
      "DNS and custom domains",
    ],

    futureImprovements: [
      "Bring the backend back online",
      "Reconnect and verify the production frontend/backend setup",
      "Continue improving the finance dashboard",
      "Improve the smart transaction input experience",
      "Add recurring transactions",
      "Add financial goal tracking",
      "Add financial insights and recommendations",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/ladosky1/KudiTrack",
      },
      {
        label: "Frontend",
        href: "https://kudi-track-seven.vercel.app/login",
      },
      {
        label: "Custom Domain",
        href: "https://app.kuditrack.com.ng/login",
      },
    ],

    posts: [
      {
        title: "KudiTrack development",
        href: "https://x.com/ladosky__/status/2068949574064988458",
      },
    ],
  },

  {
    id: "pulsehub",
    name: "PulseHUB",
    tagline: "A real-time community platform.",
    description:
      "A real-time multimedia discussion hub that pushed my full-stack development into authentication, messaging, communities, Socket.io, and live UI updates.",
    image: pulseHubImage,
    status: ["shipped","evolving"],
    currentVersion: "V1",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS modules",
      "Mantine",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "JWT",
      "Resend",
    ],

    versions: [
      {
        label: "V1",
        description:
          "Full-stack real-time community platform with authentication, friends, messaging, communities, and Socket.io-powered live updates.",
      },
    ],

    whatILearned: [
      "Real-time application architecture",
      "Socket.io",
      "WebSocket communication",
      "Rooms and broadcasting",
      "Live UI state updates",
      "Messaging systems",
      "Community architecture",
      "MongoDB data modelling",
      "Authentication and sessions",
      "Backend services",
      "Deployment",
      "DNS configuration",
      "Email infrastructure",
    ],

    futureImprovements: [
      "Continue improving the real-time experience",
      "Improve mobile usability",
      "Continue refining community features",
      "Complete production email infrastructure",
      "Continue evolving PulseHUB toward V2",
      "Media upload and sharing",
      "Push notifications",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/ladosky1/PulseHub",
      },
      {
        label: "Live",
        href: "https://pulsehub.com.ng/",
      },
    ],

    posts: [
      {
        title: "Latest PulseHUB progress",
        href: "https://x.com/ladosky__/status/2096227017653928383",
      },
    ],
  },
];