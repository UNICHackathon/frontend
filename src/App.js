import { Routes, Route } from 'react-router-dom';
import LinearChart from './components/graphs/LinearGraph.js';
import BarChart from './components/graphs/BarChart';
import DonutChart from './components/graphs/DonutChart.js';
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
      <LinearChart expenses={[500, 700, 1200, 800, 1500, 900]} dates={['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']} />
      <LinearChart expenses={[
        50, 200, 150, 300, 100, 250, 75,
        0, 0, 300, 20, 100, 150, 80,
        220, 30, 0, 60, 0, 90, 270,
        150, 30, 120, 80, 0, 50, 110,
        300, 240, 100, 90, 250, 0, 300
    ]} dates={[
        '01/12/2024', '02/12/2024', '03/12/2024', '04/12/2024',
        '05/12/2024', '06/12/2024', '07/12/2024', '08/12/2024',
        '09/12/2024', '10/12/2024', '11/12/2024', '12/12/2024',
        '13/12/2024', '14/12/2024', '15/12/2024', '16/12/2024',
        '17/12/2024', '18/12/2024', '19/12/2024', '20/12/2024',
        '21/12/2024', '22/12/2024', '23/12/2024', '24/12/2024',
        '25/12/2024', '26/12/2024', '27/12/2024', '28/12/2024',
        '29/12/2024', '30/12/2024', '31/12/2024'
    ]} />
    <DonutChart paidAmount={3000} remainingAmount={7000} />
    <BarChart 
    dataPoints={[200, 300, 150, 400, 250]} 
    labels={['Jan', 'Feb', 'March', 'April', 'May']} 
/>

    </div>
  );
}

export default App;
