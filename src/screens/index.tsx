import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from '@/context/AppContext';
import {
  ControlButton,
  OptionButton,
  LearningWord,
  SentenceWord,
} from '@/components';
import { Container, Sentence, Title } from './styles';
import { getWordsFromKeys } from '../utils';

export default function App() {
  const { lessons } = useContext(AppContext);
  const lesson = lessons[1] ?? [];
  const phrase = getWordsFromKeys(lesson?.sentence ?? {}) ?? [];

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Fill in the missing word</Title>
      <Sentence>
        {phrase.map(word => (
          <SentenceWord
            word={word[0]}
            chosenWord={Object.keys(lesson?.chosenWords)[0]}
            key={word[0]}
          />
        ))}
      </Sentence>
      <Sentence>
        {phrase.map(words => (
          <LearningWord
            words={words}
            chosenWords={lesson?.chosenWords ?? {}}
            key={words[0]}
          />
        ))}
      </Sentence>
      <ControlButton title="CONTINUE" />
      <OptionButton word="folgen" type="option" />
    </Container>
  );
}
