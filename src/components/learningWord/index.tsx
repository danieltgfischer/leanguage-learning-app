import { useContext, useState } from 'react';
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
import { AppContext } from '@/context/AppContext';
import OptionButton from '../optionButton';

type Props = {
  words: string[];
  chosenWords: { [key: string]: string };
};

const LearningWord: React.FC<Props> = ({
  words: [nativeWord, learningWord],
  chosenWords,
}: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const { chosenOption } = useContext(AppContext);

  if (chosenWords[cleanString(nativeWord)] === cleanString(learningWord)) {
    if (chosenOption !== '') {
      return <OptionButton word={chosenOption} onSentance />;
    }
    return <Line />;
  }

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
