import { createContext, useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { AppState, Lesson } from './types';
import { db } from '@/config/firebaseConfig';

const INITIAL_STATE: AppState = {
  lesson: {
    chosenWords: {},
    extraOptions: [],
    sentence: {},
    answer: '',
  },
  lessonsLength: 0,
  chosenOption: '',
  setChosenOption: () => null,
  setVerified: () => null,
  verified: false,
  setStepLesson: () => null,
};

export const AppContext = createContext<AppState>(INITIAL_STATE);

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [chosenOption, setChosenOption] = useState('');
  const [stepLesson, setStepLesson] = useState(0);
  const [verified, setVerified] = useState(false);
  const lesson = useMemo(
    () => lessons[stepLesson] ?? [],
    [lessons, stepLesson],
  );

  useEffect(() => {
    const data: Lesson[] = [];
    getDocs(collection(db, 'translations'))
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push(doc.data() as Lesson);
        });
        setLessons(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const value = useMemo(
    () => ({
      lesson,
      chosenOption,
      setChosenOption,
      verified,
      setVerified,
      setStepLesson,
      lessonsLength: lessons.length,
    }),
    [chosenOption, lesson, lessons.length, verified],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
