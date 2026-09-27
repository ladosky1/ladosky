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
    projectId: "AnimeLad",
    currentVersion: "V2",
    status: ["shipped", "evolving"],
    currentFocus:
      "Improving the full anime search and better watchlist experience.",
    next: [
      "Improve mobile usability",
      "Implement better search and filtering",
      "Discard backend auth system and use local storage for watchlist",
      "Improve the overall UI and UX of the application",
    ],
    nextMilestone: "V3",
  },
];