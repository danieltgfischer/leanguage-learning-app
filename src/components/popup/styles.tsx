import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  background-color: #fff;
  padding: 2px 15px 5px;
  border-radius: 5px;
  align-items: center;
  z-index: 1;
  margin: 15px;
`;

export const Arrow = styled.View`
  position: absolute;
  width: 0;
  height: 0;
  bottom: -12px;
  border-left-width: 8px;
  border-right-width: 8px;
  border-top-width: 15px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff;
`;

export const Text = styled.Text`
  color: #2d5264;
  font-size: 16px;
  font-weight: 500;
`;
