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
  margin: 0 0 20px;
`;

export const Sentence = styled.View`
  flex-direction: row;
  align-items: baseline;
  min-height: 70px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  margin: 40px 0 0;
  align-items: flex-start;
  justify-content: center;
`;

export const ControlButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 50px;
`;
