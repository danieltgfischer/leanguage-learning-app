import { Arrow, Container, Text } from './styles';

type Props = {
  word: string;
  visible?: boolean;
};

const Popup: React.FC<Props> = ({ visible, word }: Props) => {
  if (!visible) return null;
  return (
    <Container>
      <Text>{word}</Text>
      <Arrow />
    </Container>
  );
};

Popup.defaultProps = {
  visible: true,
};

export default Popup;
