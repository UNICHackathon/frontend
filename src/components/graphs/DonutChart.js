import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importar el plugin para etiquetas
import './DonutChart.css'; // Importar el CSS

const DonutChart = ({ paidAmount, remainingAmount }) => {
    const totalAmount = paidAmount + remainingAmount; // Calcular la cantidad total

    const data = {
        labels: ['Paid', 'Pending'],
        datasets: [
            {
                data: [paidAmount, remainingAmount],
                backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'], // Azul para pagado, rojo para pendiente
                hoverBackgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true, // Mostrar la leyenda
                position: 'top', // Colocar la leyenda en la parte superior
                labels: {
                    font: {
                        size: 14, // Tamaño de fuente para la leyenda
                        color: 'black', // Color de texto para la leyenda
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}`;
                    },
                },
            },
            datalabels: {
                display: false, // No mostrar etiquetas en los segmentos
            },
        },
    };

    return (
        <div className="donut-chart-container">
            <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
            <div className="donut-label">
                {`${paidAmount}/${totalAmount}`} {/* Mostrar pagado/total en el centro */}
            </div>
        </div>
    );
};

export default DonutChart;
