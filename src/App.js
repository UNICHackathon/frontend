import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from '@routes/Home';
import Transactions from '@routes/Transactions';
import Analytics from '@routes/Analytics';
import Login from '@routes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
