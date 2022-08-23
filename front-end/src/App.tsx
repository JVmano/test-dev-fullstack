import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import Indexes from './routes';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Indexes />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
