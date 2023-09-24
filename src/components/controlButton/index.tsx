import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonText } from './styles';

export type TypeButton = 'continue' | 'check' | 'success' | 'error';
type Props = {
  title: string;
  type?: TypeButton;
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
