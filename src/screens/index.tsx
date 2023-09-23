import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from '@/context/AppContext';
import { ControlButton } from '@/components';
import { Container, Title } from './styles';

export default function App() {
  const { lessons } = useContext(AppContext);

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Fill in the missing word</Title>
      <ControlButton title="CONTINUE" />
    </Container>
  );
}
