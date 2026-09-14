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
    projectId: "pulsehub",
    currentVersion: "V1",
    status: ["shipped", "evolving"],
    currentFocus:
      "Improving the real-time experience and continuing to refine the production setup.",
    next: [
      "Media uploads",
      "Improve mobile usability",
      "Continue refining community features",
      "Complete production email infrastructure",
    ],
    nextMilestone: "V2",
  },
];