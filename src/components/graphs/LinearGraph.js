import React from 'react'; 
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartAnnotation from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
import './LinearGraph.css';

Chart.register(ChartAnnotation);

const formatNumber = (num) => {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'k';
    }
    return num;
};

const LinearChart = ({ dataValues = [], dates = [], chartType, size }) => {
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
                        xValue: dates[0],
                        yValue: Math.max(...dataValues) + 50,
                        content: [`${(lastValue)} €`],
                        font: {
                            size: 24,
                            weight: 'bold',
                        },
                        position: {
                            x: 'start',
                            y: 'top',
                        },
                        padding: 6,
                        xAdjust: 10,
                        yAdjust: -25,
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
                min: 0,
                max: dates.length - 1,
            },
            y: {
                ticks: {
                    display: true,
                    callback: (value) => formatNumber(value),
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    // Define el tamaño del contenedor según el argumento size
    let chartSize;
    if (size === 'small') {
        chartSize = { width: '100%', height: '200px' };
    } else if (size === 'big') {
        chartSize = { width: '100%', height: '400px' };
    } else {
        // Puedes manejar un caso de error si el tamaño no es válido
        chartSize = { width: '100%', height: '300px' }; // Tamaño por defecto
    }

    return (
        <div style={chartSize}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LinearChart;
