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
  lessons: Lesson[];
  chosenOption: string;
  setChosenOption: Dispatch<SetStateAction<string>>;
  setVerified: Dispatch<SetStateAction<string>>;
  verified: boolean;
};
