// Define the types for the shared structures

export interface Framework {
  url: string;
  name: string;
};

export  interface FrameworksInfo {
  bestFrameworks: Framework[];
  type: string;
};

export interface LanguagesInfo {
  list: string[];
  title: string;
};

export interface TechData {
  frameworks: FrameworksInfo;
  languages: LanguagesInfo;
};