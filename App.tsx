import AppProvider from '@/context/AppContext';
import App from '@/screens';


export default function() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
