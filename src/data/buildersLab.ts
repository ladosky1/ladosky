export type BuilderLabItem = {
  projectId: string;
  currentVersion: string;
  status: string[];
  currentFocus: string;
  next: string[];
  nextMilestone: string;
};

export const buildersLab: BuilderLabItem[] = [
  {
    projectId: "JobApplyTracker",
    currentVersion: "V2",
    status: ["shipped", "evolving"],
    currentFocus:
      "Improving the architecture and adding meaningful features to the application.",
    next: [
      "Token expiration handling",
      "In-app & email job notifications",
      "Email verification",
      "Freeelance job board integration",
      "Interview reminders",
      "Analytics dashboard",
    ],
    nextMilestone: "V3",
  },
];