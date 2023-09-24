import { Animated } from 'react-native';
import styled from 'styled-components/native';

type ContainerProps = {
  success: boolean;
};
export const Container = styled(Animated.View)`
  position: absolute;
  background-color: ${({ success }: ContainerProps) =>
    !success ? '#fe7a87' : '#0ae2e8'};
  height: 150px;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
  bottom: 0px;
  padding: 15px 0 0;
`;

export const Header = styled.View`
  margin: 0 0 10px;
  padding: 0 12% 0;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const Span = styled.Text`
  font-weight: 700;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
`;
