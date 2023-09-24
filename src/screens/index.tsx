import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from '@/context/AppContext';
import { OptionButton, LearningWord, SentenceWord } from '@/components';
import { ButtonsContainer, Container, Sentence, Title } from './styles';
import { getWordsFromKeys } from '../utils';

export default function App() {
  const { lessons } = useContext(AppContext);
  const lesson = lessons[1] ?? [];
  const phrase = getWordsFromKeys(lesson?.sentence ?? {}) ?? [];
  const options = (lesson?.extraOptions ?? [])?.concat(lesson?.answer);

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Fill in the missing word</Title>
      <Sentence>
        {phrase.map(word => (
          <SentenceWord
            word={word[0]}
            chosenWord={Object.keys(lesson?.chosenWords ?? {})[0]}
            key={Date.now() + Math.random()}
          />
        ))}
      </Sentence>
      <Sentence>
        {phrase.map(words => (
          <LearningWord
            answer={lesson?.answer}
            words={words}
            chosenWords={lesson?.chosenWords ?? {}}
            key={Date.now() + Math.random()}
          />
        ))}
      </Sentence>
      <ButtonsContainer>
        {(options ?? []).map(word => (
          <OptionButton word={word} key={Date.now() + Math.random()} />
        ))}
      </ButtonsContainer>
    </Container>
  );
}
