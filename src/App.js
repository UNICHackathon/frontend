import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './routes/Home';
import Income from './routes/Income';
import Spending from './routes/Spending';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/income" element={<Income />}/>
        <Route path="/spending" element={<Spending />}/>
      </Routes>
    </div>
  );
}

export default App;
