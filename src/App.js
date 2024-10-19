import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from '@routes/Home';
import Income from '@routes/Income';
import Spending from '@routes/Spending';
import Login from '@routes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/income" element={<Income />}/>
        <Route path="/spending" element={<Spending />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
