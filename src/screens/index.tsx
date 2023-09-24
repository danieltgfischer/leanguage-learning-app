import { useCallback, useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from '@/context/AppContext';
import { getWordsFromKeys } from '../utils';
import {
  OptionButton,
  LearningWord,
  SentenceWord,
  ControlButton,
  Result,
} from '@/components';
import {
  ButtonsContainer,
  Container,
  ControlButtonContainer,
  Sentence,
  Title,
} from './styles';

type TypeButton = 'continue' | 'check';

export default function App() {
  const [typeButton, setTypeButton] = useState<TypeButton>('continue');
  const [stepLesson, setStepLesson] = useState(0);
  const { lessons, chosenOption } = useContext(AppContext);
  const lesson = lessons[stepLesson] ?? [];
  const phrase = getWordsFromKeys(lesson?.sentence ?? {}) ?? [];
  const options = (lesson?.extraOptions ?? [])?.concat(lesson?.answer);
  const controlButtonLabels = {
    continue: 'CONTINUE',
    check: 'CHECK ANSWER',
  };

  useEffect(() => {
    if (chosenOption !== '') {
      setTypeButton('check');
    } else {
      setTypeButton('continue');
    }
  }, [chosenOption]);

  const nextQuestion = useCallback(() => {
    setStepLesson(step => {
      if (step < lessons?.length - 1) {
        return step + 1;
      }
      return 0;
    });
  }, [lessons?.length]);

  const handleNextLesson = useCallback(() => {
    if (typeButton === 'check') {
      return;
    }
    nextQuestion();
  }, [nextQuestion, typeButton]);

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
      <ControlButtonContainer>
        <ControlButton
          onPress={handleNextLesson}
          title={controlButtonLabels[typeButton]}
          type={typeButton}
        />
      </ControlButtonContainer>
      <Result
        success={false}
        answer={lesson?.answer ?? ''}
        nextQuestion={nextQuestion}
      />
    </Container>
  );
}
