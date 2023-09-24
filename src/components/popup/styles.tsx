import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  flex-wrap: nowrap;
  align-self: flex-start;
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

export const PopupText = styled.Text`
  color: #2d5264;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 10px;
`;
