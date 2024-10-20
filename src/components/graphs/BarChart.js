import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './BarChart.css';

const formatNumber = (num) => {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    }
    return num;
};

const BarChart = ({ dataPoints, labels }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Expenses',
                data: dataPoints,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
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
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const value = tooltipItem.raw;
                        return formatNumber(value);
                    },
                },
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
                },
                drawTicks: true,
                tickLength: 10,
                lineWidth: 2,
                color: '#000',
            },
            y: {
                ticks: {
                    display: true,
                    callback: (value) => formatNumber(value),
                },
                grid: {
                    display: false,
                },
                drawTicks: true,
                tickLength: 10,
                lineWidth: 2,
                color: '#000',
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '200px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
