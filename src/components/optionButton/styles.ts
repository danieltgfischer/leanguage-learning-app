import { Platform } from 'react-native';
import styled from 'styled-components/native';

type PropStyleType = {
  type: 'option' | 'desabled' | 'success' | 'error';
};

const colorsBtn: { [key: string]: string } = {
  option: '#fff',
  desabled: '#9fb7c0',
  success: '#0ae2e8',
  error: '#fe7a87',
  chosen: '#6292a6',
};

const colorsText: { [key: string]: string } = {
  option: '#2b4c5f',
  desabled: '#678190',
  success: '#fff',
  error: '#fff',
  chosen: 'transparent',
};

export const Button = styled.TouchableOpacity`
  background-color: ${({ type }: PropStyleType) => colorsBtn[type]};
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  margin: 5px 15px;
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
  })};
`;

export const ButtonText = styled.Text`
  color: ${({ type }: PropStyleType) => colorsText[type]};
  font-weight: 700;
`;
