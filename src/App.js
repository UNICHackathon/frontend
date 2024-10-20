import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';

import Home from '@routes/Home';
import Protected from '@routes/Protected';
import Transactions from '@routes/Transactions';
import Analytics from '@routes/Analytics';
import Login from '@routes/Login';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected><Home /></Protected>} />
          <Route path="/analytics" element={<Protected><Analytics /></Protected>} />
          <Route path="/transactions" element={<Protected><Transactions /></Protected>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
