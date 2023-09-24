import { useState } from 'react';
import {
  Button,
  Container,
  Dotted,
  Line,
  PopupContainer,
  Text,
} from './styles';
import Popup from '../popup';
import { cleanString } from '@/utils';

type Props = {
  words: string[];
  chosenWords: { [key: string]: string };
};

const LearningWord: React.FC<Props> = ({
  words: [nativeWord, learningWord],
  chosenWords,
}: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  if (chosenWords[cleanString(nativeWord)] === cleanString(learningWord))
    return <Line />;
  return (
    <Container>
      {showPopup && (
        <PopupContainer>
          <Popup word={nativeWord} />
        </PopupContainer>
      )}
      <Button onPress={() => setShowPopup(!showPopup)}>
        <Dotted>
          <Text>{learningWord ?? ''}</Text>
        </Dotted>
      </Button>
    </Container>
  );
};

export default LearningWord;
