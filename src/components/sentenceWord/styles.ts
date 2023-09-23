import styled from 'styled-components/native';

type TextProp = {
  chosen: boolean;
};

export const Text = styled.Text`
  color: #f5f5f5;
  font-weight: ${({ chosen }: TextProp) => {
    if (chosen) return 700;
    return 400;
  }};
  font-size: ${({ chosen }: TextProp) => {
    if (chosen) return 20;
    return 18;
  }}px;
  text-decoration: ${({ chosen }: TextProp) => {
    if (chosen) return 'underline';
    return 'none';
  }};
  margin: 0 2px;
`;
