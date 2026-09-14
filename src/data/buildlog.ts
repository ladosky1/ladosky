export type BuildLogEntry = {
  id: string;
  projectId: string;
  date: string;
  title: string;
  description: string;
  xUrl?: string;
};

export const buildLog: BuildLogEntry[] = [
  {
    id: "pulsehub-real-time-messaging",
    projectId: "pulsehub",
    date: "September 2026",
    title: "Built real-time messaging",
    description:
      "Implemented real-time messaging with Socket.io and connected live updates to the React interface.",
    xUrl: "https://x.com/ladosky__/status/2096227017653928383",
  },

  {
    id: "kuditrack-typescript",
    projectId: "kuditrack",
    date: "June 2026",
    title: "Moved deeper into TypeScript",
    description:
      "Built KudiTrack while learning TypeScript, authentication, data visualization, and structured UI development.",
    xUrl:
      "https://x.com/ladosky__/status/2068949574064988458",
  },

  {
    id: "jobapplytracker-fullstack",
    projectId: "job-apply-tracker",
    date: "may 2026",
    title: "Turned JobApplyTracker into a full-stack app",
    description:
      "Reworked the original frontend application with a backend, authentication, MongoDB, and persistent data.",
    xUrl:
      "https://x.com/ladosky__/status/2050976557460553743",
  },

  {
    id: "animelad-fullstack",
    projectId: "animelad",
    date: "March 2026",
    title: "Started the full-stack evolution of AnimeLad",
    description:
      "Took the original frontend AnimeLad project and rebuilt it with a backend, API layer, authentication, and MongoDB.",
    xUrl:
      "https://x.com/ladosky__/status/2032413707800637662",
  },
];