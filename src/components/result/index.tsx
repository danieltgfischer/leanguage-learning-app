import { Dispatch, SetStateAction, useCallback, useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ControlButton, { TypeButton } from '../controlButton';
import { Container, Header, Span, Title } from './styles';
import { AppContext } from '@/context/AppContext';

type Props = {
  success?: boolean;
  answer: string;
  nextQuestion: () => void;
  showResult: boolean;
  setShowResult: Dispatch<SetStateAction<boolean>>;
};

const Result: React.FC<Props> = ({
  success,
  answer,
  nextQuestion,
  showResult,
  setShowResult,
}: Props) => {
  const { setVerified, setChosenOption } = useContext(AppContext);
  const next = useCallback(() => {
    setChosenOption('');
    setVerified(false);
    setShowResult(false);
    nextQuestion();
  }, [nextQuestion, setChosenOption, setShowResult, setVerified]);

  let type: TypeButton = 'success';
  if (!success) {
    type = 'error';
  }

  if (showResult)
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

  return null;
};

Result.defaultProps = {
  success: true,
};

export default Result;
