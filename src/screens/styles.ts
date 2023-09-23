import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3b6c82;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  margin: ${StatusBar.currentHeight}px 0 0;
  padding: 50px 0 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: #b2d8e5;
`;

export const Sentence = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin: 25px 0 75px;
`;
