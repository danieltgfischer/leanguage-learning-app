import { Platform } from 'react-native';
import styled from 'styled-components/native';

type PropStyleType = {
  type: 'continue' | 'check' | 'success' | 'error';
};

const colorsBtn: { [key: string]: string } = {
  continue: '#6292a6',
  check: '#0ae2e8',
  success: '#fff',
  error: '#eee',
};

const colorsText: { [key: string]: string } = {
  continue: '#fff',
  check: '#fff',
  success: '#0ae2e8',
  error: '#fe7a87',
};

export const Button = styled.TouchableOpacity`
  background-color: ${({ type }: PropStyleType) => colorsBtn[type]};
  width: 80%;
  align-items: center;
  padding: 15px 0;
  border-radius: 25px;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 5px;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

export const ButtonText = styled.Text`
  color: ${({ type }: PropStyleType) => colorsText[type]};
  font-weight: 700;
`;
