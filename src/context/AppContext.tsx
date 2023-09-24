import { createContext, useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { AppState, Lesson } from './types';
import { db } from '@/config/firebaseConfig';

const INITIAL_STATE: AppState = {
  lessons: [],
  chosenOption: '',
  setChosenOption: () => null,
  setVerified: () => null,
  verified: false,
};

export const AppContext = createContext<AppState>(INITIAL_STATE);

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [data, setData] = useState<Lesson[]>([]);
  const [chosenOption, setChosenOption] = useState('');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const lessons: Lesson[] = [];
    getDocs(collection(db, 'translations'))
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          lessons.push(doc.data() as Lesson);
        });
        console.log('API', lessons);
        setData(lessons);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const value = useMemo(
    () => ({
      lessons: data,
      chosenOption,
      setChosenOption,
      verified,
      setVerified,
    }),
    [chosenOption, data, verified],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
