import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './BarChart.css'; // Asegúrate de incluir tu CSS si es necesario

const BarChart = ({ dataPoints, labels }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Expenses',
                data: dataPoints,
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
                borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de las barras
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true, // Mostrar etiquetas en el eje X
                },
                grid: {
                    display: false, // Ocultar cuadrícula del eje X
                },
                // Marcas en el eje X
                drawTicks: true,
                tickLength: 10, // Longitud de las marcas en el eje X
                lineWidth: 2, // Grosor de la línea
                color: '#000', // Color de la línea
            },
            y: {
                ticks: {
                    display: true, // Mostrar etiquetas en el eje Y
                },
                grid: {
                    display: false, // Ocultar cuadrícula del eje Y
                },
                // Marcas en el eje Y
                drawTicks: true,
                tickLength: 10, // Longitud de las marcas en el eje Y
                lineWidth: 2, // Grosor de la línea
                color: '#000', // Color de la línea
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '400px' }}> {/* Ajusta el tamaño según sea necesario */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
