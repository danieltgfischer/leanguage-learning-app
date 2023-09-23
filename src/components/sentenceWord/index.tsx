import { Text } from './styles';

type Props = {
  chosenWord: string;
  word: string;
};

const SentenceWord: React.FC<Props> = ({ chosenWord, word }: Props) => {
  return <Text chosen={chosenWord === word}>{word}</Text>;
};

export default SentenceWord;
