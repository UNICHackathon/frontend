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

const NormalLinearChart = ({ dataValues = [], dates = [] }) => {
    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Data',
                data: dataValues,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 60,
                    minRotation: 60,
                },
                grid: {
                    display: false,
                    drawTicks: true,
                    tickLength: 5,
                },
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

    return (
        <div style={{ width: '100%', height: '200px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default NormalLinearChart;
