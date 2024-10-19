import React, { useState } from 'react'; 
import { Line } from 'react-chartjs-2'; 
import 'chart.js/auto'; 
import './LinearGraph.css'; 
import Modal from './modal.js'; 

const LinearChart = ({ expenses, dates }) => { 
    const [isExpanded, setIsExpanded] = useState(false); 

    const handleClick = () => { 
        setIsExpanded(true); // Cambiar el estado a true al hacer clic
    };

    const data = { 
        labels: dates, 
        datasets: [ 
            { 
                label: 'Gastos', 
                data: expenses, 
                fill: true, 
                backgroundColor: 'rgba(75,192,192,0.2)', 
                borderColor: 'rgba(75,192,192,1)', 
                tension: 0.4, 
            }, 
        ], 
    }; 

    const options = { 
        responsive: true, 
        maintainAspectRatio: false, 
    }; 

    return ( 
        <div className="chart-container" onClick={handleClick}> 
            <Line data={data} options={options} /> 
            {/* Renderiza el Modal y pasa las props necesarias */}
            <Modal 
                isExpanded={isExpanded} 
                setIsExpanded={setIsExpanded} 
                expenses={expenses} 
                dates={dates} 
            />
        </div> 
    ); 
}; 

export default LinearChart;
