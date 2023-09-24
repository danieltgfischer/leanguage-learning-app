import { Text } from 'react-native';
import { Arrow, Container, PopupText } from './styles';

type Props = {
  word: string;
  visible?: boolean;
};

const Popup: React.FC<Props> = ({ visible, word }: Props) => {
  if (!visible) return null;

  return (
    <Container>
      <PopupText>{word}</PopupText>
      <Arrow />
    </Container>
  );
};

Popup.defaultProps = {
  visible: true,
};

export default Popup;
