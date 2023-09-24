import { Dispatch, SetStateAction } from 'react';

type Map = {
  [key: string]: string;
};
export type Lesson = {
  chosenWords: Map;
  extraOptions: string[];
  sentence: Map;
  answer: string;
};

export type AppState = {
  lesson: Lesson;
  lessonsLength: number;
  chosenOption: string;
  setChosenOption: Dispatch<SetStateAction<string>>;
  setVerified: Dispatch<SetStateAction<boolean>>;
  verified: boolean;
  setStepLesson: Dispatch<SetStateAction<number>>;
  loading: boolean;
};
