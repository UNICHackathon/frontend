import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './DonutChart.css';
import { Legend } from 'chart.js/auto';

const DonutChart = ({ paidAmount, remainingAmount }) => {
    const totalAmount = paidAmount + remainingAmount;

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
        return num.toString();
    };

    const formattedPaidAmount = formatNumber(paidAmount);
    const formattedTotalAmount = formatNumber(totalAmount);
    const label = `${formattedPaidAmount}/${formattedTotalAmount}`;

    const fontSize = Math.max(12, 16 - label.length * 0.5);

    const data = {
        labels: [
            `Paid`,
            `Remaining`,
        ],
        datasets: [
            {
                data: [paidAmount, remainingAmount],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
        ],
    };

    const options = {
        plugins: {
            datalabels: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const value = tooltipItem.raw;
                        return `${formatNumber(value)}`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
            <Doughnut data={data} options={options} />
            <div
                className="donut-label"
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                {label}
            </div>
        </div>
    );
};

export default DonutChart;
