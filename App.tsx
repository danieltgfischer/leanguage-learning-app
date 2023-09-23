import AppProvider from '@/context/AppContext';
import App from '@/screens';

export default function Root() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
