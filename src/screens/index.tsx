import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { AppContext } from '@/context/AppContext';
import { ControlButton, OptionButton, SentenceWord } from '@/components';
import { Container, Sentence, Title } from './styles';

export default function App() {
  const { lessons } = useContext(AppContext);
  const lesson = lessons[2] ?? [];
  const phrase = lesson?.nativeLanguage ?? [];

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Fill in the missing word</Title>
      <Sentence>
        {phrase.map(word => (
          <SentenceWord
            word={word}
            chosenWord={lesson?.chosenWords[0]}
            key={word}
          />
        ))}
      </Sentence>
      <ControlButton title="CONTINUE" />
      <OptionButton word="folgen" type="option" />
    </Container>
  );
}
