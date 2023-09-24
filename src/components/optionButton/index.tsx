import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonText } from './styles';
import { AppContext } from '@/context/AppContext';

type Props = {
  word: string;
  onSentance?: boolean;
} & TouchableOpacityProps;
type StateType = 'option' | 'desabled' | 'success' | 'error' | 'chosen';

const OptionButton: React.FC<Props> = ({ word, onSentance, ...props }) => {
  const { chosenOption, setChosenOption, verified } = useContext(AppContext);
  const [type, setType] = useState<StateType>('option');

  useEffect(() => {
    if (onSentance) {
      return;
    }
    if (chosenOption !== '' && chosenOption !== word) {
      setType('desabled');
    } else if (chosenOption !== '' && chosenOption === word) {
      setType('chosen');
    }
  }, [chosenOption, onSentance, type, word]);

  const onPress = useCallback(() => {
    if (!verified && chosenOption !== '') {
      setChosenOption('');
      return;
    }
    setChosenOption(word);
  }, [setChosenOption, verified, word, chosenOption]);

  return (
    <Button
      onPress={onPress}
      type={type}
      {...props}
      disabled={type !== 'option'}
    >
      <ButtonText type={type}>{word}</ButtonText>
    </Button>
  );
};

OptionButton.defaultProps = {
  onSentance: false,
};

export default OptionButton;
