import { useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ControlButton, { TypeButton } from '../controlButton';
import { Container, Header, Span, Title } from './styles';

type Props = {
  success?: boolean;
  answer: string;
  nextQuestion: () => void;
};

const Result: React.FC<Props> = ({ success, answer, nextQuestion }: Props) => {
  const next = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);
  let type: TypeButton = 'success';
  if (!success) {
    type = 'error';
  }

  return (
    <Container success={success}>
      <Header>
        {success ? (
          <Title>Great job!</Title>
        ) : (
          <Title>
            <Span>Answer: </Span>
            {answer}
          </Title>
        )}
        <MaterialCommunityIcons name="flag-variant" size={20} color="#fff" />
      </Header>
      <ControlButton type={type} title="CONTINUE" onPress={next} />
    </Container>
  );
};

Result.defaultProps = {
  success: true,
};

export default Result;
