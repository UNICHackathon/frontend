import React from 'react'; 
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartAnnotation from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
import './LinearGraph.css';

Chart.register(ChartAnnotation);

// Función para formatear números a k, M, B, T
const formatNumber = (num) => {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T'; // Billones
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B'; // Mil millones
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M'; // Millones
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K'; // Miles
    }
    return num; // Menos de mil
};

const LinearChart = ({ dataValues = [], dates = [], chartType }) => {
    const lastValue = dataValues.length > 0 ? dataValues[dataValues.length - 1] : 0;

    const data = {
        labels: dates,
        datasets: [
            {
                label: chartType === 'balance' ? 'Balance' : 'Expenses',
                data: dataValues,
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
        plugins: {
            legend: {
                display: false
            },
            annotation: {
                annotations: chartType === 'balance' ? {
                    lastValue: {
                        type: 'label',
                        xValue: dates[0], // Colocar al inicio del eje X
                        yValue: Math.max(...dataValues) + 50, // Un punto por encima del valor máximo
                        content: [`${formatNumber(lastValue)} €`], // Formateo de la última etiqueta
                        font: {
                            size: 24,
                            weight: 'bold',
                        },
                        position: {
                            x: 'start',
                            y: 'top',
                        },
                        padding: 6,
                        xAdjust: 10, // Ajustar para que quede pegado al inicio del eje X
                        yAdjust: -25, // Ajustar para que quede arriba del máximo
                    },
                } : {},
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                },
                grid: {
                    display: false,
                    drawTicks: true,
                    tickLength: 5,
                },
                min: 0, // Establecer un límite mínimo fijo
                max: dates.length - 1, // Establecer un límite máximo en base a la cantidad de fechas
            },
            y: {
                ticks: {
                    display: true,
                    callback: (value) => formatNumber(value), // Aplicar formato a los ticks del eje Y
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="chart-container">
            {chartType === 'balance' && (
                <div 
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#333',
                        position: 'absolute',
                        top: '20px', // Fijo en la parte superior
                        left: '20px', // Fijo en la izquierda
                        zIndex: 10,
                    }}
                >
                    {`${formatNumber(lastValue)} €`} {/* Aplicar formato aquí */}
                </div>
            )}
            <Line data={data} options={options} />
        </div>
    );
};

export default LinearChart;
