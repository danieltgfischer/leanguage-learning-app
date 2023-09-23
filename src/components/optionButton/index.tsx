import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonText } from './styles';

type Props = {
  word: string;
  type?: 'option' | 'desabled' | 'success' | 'error' | 'chosen';
  chosen?: boolean;
} & TouchableOpacityProps;

const OptionButton: React.FC<Props> = ({ word, type, chosen, ...props }) => {
  if (chosen) {
    return <Button type="chosen" {...props} />;
  }
  return (
    <Button
      type={type}
      {...props}
      disabled={type === 'desabled' || type === 'success' || type === 'error'}
    >
      <ButtonText type={type}>{word}</ButtonText>
    </Button>
  );
};

OptionButton.defaultProps = {
  type: 'option',
  chosen: false,
};

export default OptionButton;
