import React from 'react';    
import { Bar } from 'react-chartjs-2'; 
import 'chart.js/auto'; 
import ChartAnnotation from 'chartjs-plugin-annotation'; 
import { Chart } from 'chart.js'; 
import './BarGraphGenerative.css'; 

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

const GenerativeBarChart = ({ dataValues = [], predictedData = [], dates = [], size = 'small' }) => { 
    const showPrediction = predictedData.length > 0; 

    const data = { 
        labels: dates, 
        datasets: [ 
            { 
                label: 'Data', 
                data: dataValues, 
                backgroundColor: 'rgba(75, 192, 192, 0.5)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1, 
                barThickness: 20, 
                barPercentage: 1.0, 
                categoryPercentage: 1.0, 
            }, 
            { 
                label: 'Prediction', 
                data: showPrediction ? Array(dataValues.length).fill(null).concat(predictedData) : [], 
                backgroundColor: 'rgba(192, 192, 192, 0.5)', 
                borderColor: 'rgba(192, 192, 192, 1)', 
                borderWidth: 1, 
                barThickness: 20, 
                barPercentage: 1.0, 
                categoryPercentage: 1.0 
            }, 
        ], 
    }; 

    const allValues = [...dataValues, ...predictedData]; 
    const maxValue = Math.max(...allValues); 
    const minValue = Math.min(...allValues); 

    const range = maxValue - minValue; 
    const step = range / 5; 

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
                }, 
                grid: { 
                    display: false, 
                }, 
                offset: true, 
            }, 
            y: { 
                beginAtZero: minValue >= 0, 
                min: minValue < 0 ? minValue : undefined, 
                max: maxValue, 
                ticks: { 
                    display: true, 
                    callback: (value) => formatNumber(value), 
                    stepSize: step, 
                }, 
                grid: { 
                    display: false, 
                }, 
            }, 
        }, 
    }; 

    const chartHeight = size === 'big' ? '400px' : '200px'; 

    return ( 
        <div style={{ width: '100%', height: chartHeight }}> 
            <Bar data={data} options={options} /> 
        </div> 
    ); 
}; 

export default GenerativeBarChart;
