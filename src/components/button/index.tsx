import React from 'react';
import { Button, ButtonText } from './styles';

type Props = {
  title: string;
  type?: 'continue' | 'check' | 'success' | 'error';
};

const ControlButton: React.FC<Props> = ({ title, type }) => {
  return (
    <Button type={type}>
      <ButtonText type={type}>{title}</ButtonText>
    </Button>
  );
};

ControlButton.defaultProps = {
  type: 'continue',
};

export default ControlButton;
