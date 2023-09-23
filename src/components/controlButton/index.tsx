import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonText } from './styles';

type Props = {
  title: string;
  type?: 'continue' | 'check' | 'success' | 'error';
} & TouchableOpacityProps;

const ControlButton: React.FC<Props> = ({ title, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      <ButtonText type={type}>{title}</ButtonText>
    </Button>
  );
};

ControlButton.defaultProps = {
  type: 'continue',
};

export default ControlButton;
