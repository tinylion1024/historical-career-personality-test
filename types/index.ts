import { Character } from '@/data/characters';

export type PersonalityResult = {
  primary: Character;
  secondary: Character;
  shadow: Character;
  scores: Record<string, number>;
};

export type ScoreRequest = {
  answers: number[];
};

export type ScoreResponse = {
  scores: Record<string, number>;
  result: {
    primary: string;
    secondary: string;
    shadow: string;
  };
};

export type ReportRequest = {
  result: {
    primary: string;
    secondary: string;
    shadow: string;
  };
};

export type ReportResponse = {
  finalReport: string;
};
