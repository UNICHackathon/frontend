import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './DonutChart.css'; // Asegúrate de importar tu CSS

const DonutChart = ({ paidAmount, remainingAmount }) => {
    const totalAmount = paidAmount + remainingAmount;

    // Función para formatear los números
    const formatNumber = (num) => {
        if (num >= 1e12) {
            return (num / 1e12).toFixed(1) + 'T'; // Trillones
        }
        else if (num >= 1e9) {
            return (num / 1e9).toFixed(1) + 'B'; // Miles de millones
        }
        else if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + 'M'; // Millones
        }
        else if (num >= 1e3) {
            return (num / 1e3).toFixed(1) + 'K'; // Miles
        }
        
        return num.toString(); // Números pequeños
    };

    const formattedPaidAmount = formatNumber(paidAmount);
    const formattedTotalAmount = formatNumber(totalAmount);
    const label = `${formattedPaidAmount}/${formattedTotalAmount}`;

    // Determina el tamaño de fuente basado en la longitud del texto
    const fontSize = Math.max(12, 16 - label.length * 0.5); // Ajusta la fórmula según sea necesario

    const data = {
        labels: [
            `Paid`,   // Etiqueta con formato correcto
            `Remaining`, // Etiqueta con formato correcto
        ],
        datasets: [
            {
                data: [paidAmount, remainingAmount],
                backgroundColor: ['#FF6384', '#36A2EB'], // Colores rojo y azul
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
        ],
        legend:true
    };

    const options = {
        plugins: {
            datalabels: {
            display: false, // Ocultar etiquetas en las partes de la dona
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        // Obtiene el valor del tooltipItem
                        const value = tooltipItem.raw;
                        // Formatea el valor
                        return `${formatNumber(value)}`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ position: 'relative', width: '300px', height: '300px' }}>
            <Doughnut data={data} options={options} />
            <div
                className="donut-label"
                style={{
                    fontSize: `${fontSize}px`, // Aplica el tamaño de fuente calculado
                }}
            >
                {label}
            </div>
        </div>
    );
};

export default DonutChart;
