type Map = {
  [key: string]: string;
};
export type Lesson = {
  chosenWords: Map;
  extraOptions: string[];
  sentence: Map;
};

export type AppState = {
  lessons: Lesson[];
};
