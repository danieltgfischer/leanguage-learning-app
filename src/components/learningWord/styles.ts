import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  margin: 0 2px;
`;

export const Button = styled.TouchableOpacity`
  margin: 15px 0 0;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Dotted = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  border-style: dotted;
`;
export const Line = styled.View`
  width: 70px;
  height: 1px;
  background-color: #fff;
  top: 5px;
`;

export const PopupContainer = styled.View`
  position: absolute;
  left: -80%;
  top: -30px;
`;
