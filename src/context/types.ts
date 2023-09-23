export type Lesson = {
  chosenWords: string[];
  extraOptions: string[];
  learningLanguage: string[];
  nativeLanguage: string[];
}

export type AppState  = {
  lessons: Lesson[];
}
