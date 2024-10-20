import React, { useState } from 'react';  
import { Card, CardContent, Typography, Box } from '@mui/material';
import LinearChartGen from './graphs/LinearGraphGenerative.js';
import BarChart from './graphs/BarChart.js';
import LinearChart from './graphs/LinearGraph.js';
import './ExpensesGraph.css';

function ExpensesGraph() {
    const [chartType, setChartType] = useState('linear'); 
    const [period, setActivePeriod] = useState('month');
    
    const [chartData, setChartData] = useState({
        dataValues: [400, 350, 250, 600, 700, 550, 300, 450, 400],
        dates: [
            '01/10/2024', '02/10/2024', '05/10/2024', 
            '08/10/2024', '10/10/2024', '13/10/2024', 
            '14/10/2024', '17/10/2024', '20/10/2024'
        ],
    });

    const handlePeriodChange = (period) => {
        setActivePeriod(period);
        switch (period) {
            case 'year':
                setChartData({
                    dataValues: [300, 200, 450, 350, 600, 800],
                    dates: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                });
                break;
            case '3months':
                setChartData({
                    dataValues: [400, 350, 300],
                    dates: ['Abr', 'May', 'Jun'],
                });
                break;
            case 'month':
                setChartData({
                    dataValues: [400, 350, 250, 600, 700, 550, 300, 450, 400],
                    dates: [
                        '01/10/2024', '02/10/2024', '05/10/2024', 
                        '08/10/2024', '10/10/2024', '13/10/2024', 
                        '14/10/2024', '17/10/2024', '20/10/2024'
                    ],
                });
                break;
            default:
                break;
        }
    };
    
    const renderChart = () => {
        switch (chartType) {
            case 'linear':
                return (
                    <LinearChart 
                        dataValues={chartData.dataValues} 
                        dates={chartData.dates}  
                    />
                );
            case 'bar':
                return (
                    <BarChart 
                        dataPoints={chartData.dataValues} 
                        labels={chartData.dates}
                    />
                );
            case 'generative':
                return (
                    <LinearChartGen 
                        actualData={chartData.dataValues.slice(0, 3)}
                        predictedData={chartData.dataValues.slice(3)}
                        dates={chartData.dates}
                    />
                );
            default:
                return null; 
        }
    };

    const getTitle = () => {
        return chartType === 'linear' ? 'Balance' : 'Expenses';
    };

    return (
        <Card sx={{ mt: 3 }}>
            <CardContent sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {getTitle()}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', gap: 0 }}>
                        <button 
                            className={`button ${period === 'year' ? 'selected' : ''}`} 
                            onClick={() => handlePeriodChange('year')}
                        >
                            Year
                        </button>
                        <button 
                            className={`button ${period === '3months' ? 'selected' : ''}`} 
                            onClick={() => handlePeriodChange('3months')}
                        >
                            3 Months
                        </button>
                        <button 
                            className={`button ${period === 'month' ? 'selected' : ''}`} 
                            onClick={() => handlePeriodChange('month')}
                        >
                            Month
                        </button>
                    </Box>
                    <Box sx={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', gap: 0 }}>
                        <button 
                            className={`button ${chartType === 'linear' ? 'selected' : ''}`} 
                            onClick={() => setChartType('linear')}
                        >
                            <img 
                                src="linear-removebg-preview.png" 
                                alt="linear" 
                                style={{ height: '10px', marginRight: '1px' }}
                            /> 
                        </button>                
                        <button 
                            className={`button ${chartType === 'bar' ? 'selected' : ''}`} 
                            onClick={() => setChartType('bar')}
                        >
                            <img 
                                src="/bar-removebg-preview.png" 
                                alt="bar" 
                                style={{ height: '10px', marginRight: '2px' }} 
                            /> 
                        </button>                
                        <button 
                            className={`button ${chartType === 'generative' ? 'selected' : ''}`} 
                            onClick={() => setChartType('generative')}
                        >
                            <img 
                                src="/generate-ai-icon-stars-flat-260nw-2506284183-removebg-preview.png" 
                                alt="Generative" 
                                style={{ height: '10px', marginRight: '5px' }}
                            /> 
                        </button>
                    </Box>
                </Box>
            </CardContent>
            <CardContent sx={{ p: 3, width: '96%', height: '100%', minHeight: '200px' }}>
                {renderChart()}
            </CardContent>
        </Card>
    );
}

export default ExpensesGraph;
