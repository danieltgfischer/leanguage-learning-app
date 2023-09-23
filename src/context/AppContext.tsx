import { createContext, useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { AppState, Lesson } from './types';
import { db } from '@/config/firebaseConfig';

const INITIAL_STATE= {
  lessons: [],
}

export const AppContext = createContext<AppState>(INITIAL_STATE)

type Props = {
  children: React.ReactNode;
}
const AppProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<AppState>({lessons: []});
  useEffect( () => {
    const lessons: Lesson[] = []
     getDocs(collection(db, "translations")).then(querySnapshot => {
      console.log(querySnapshot);
       querySnapshot.forEach((doc) => {
        lessons.push(doc.data() as Lesson);
       });
     });
     setData({lessons});
  }, []);

  const value = useMemo(() => data, [data]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
