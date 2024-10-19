import React from 'react';
import { Line } from 'react-chartjs-2';
import './modal.css';

const Modal = ({ isExpanded, setIsExpanded, expenses, dates }) => {
    if (!isExpanded) return null; // No renderizar si no está expandido

    // Datos del gráfico (usando los datos originales)
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

    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={handleClose}>X</button>
                {/* Contenedor del gráfico centrado con margen de 3cm */}
                    <Line data={data} options={options} />
            </div>
        </div>
    );
    
};

export default Modal;
