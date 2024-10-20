import React, { useState, useEffect } from 'react';   
import { Card, CardContent, Typography, Box } from '@mui/material';
import LinearGraphGenerative from './graphs/LinearGraphGenerative';
import BarChart from './graphs/BarChart';
import BarChartGenerative from './graphs/BarGraphGenerative.js';
import './ExpensesGraph.css';

function ExpensesGraph() {
    const [chartType, setChartType] = useState('linear'); 
    const [period, setActivePeriod] = useState('month');

    const [chartData, setChartData] = useState({
        dataValues: [],
        predictedData: [],
        dates: [],
    });

    useEffect(() => {
        handlePeriodChange('month');
    }, []);

    const handlePeriodChange = (selectedPeriod) => {
        setActivePeriod(selectedPeriod);
        switch (selectedPeriod) {
            case 'year':
                const yearlyDataValues = [300,250,450,350,600,700,433,550,300,163]
                const yearlyDates = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'];
                
                setChartData({
                    dataValues: yearlyDataValues,
                    predictedData: [],
                    dates: yearlyDates,
                });
                break;
            case '3months':
                const threeMonthsDataValues = [433,550,300];
                setChartData({
                    dataValues: threeMonthsDataValues,
                    predictedData: [],
                    dates: ['Jul', 'Ago', 'Sep'],
                });
                break;
            case 'month':
                const monthlyDataValues = [ 15, 58, 25, 10, 5, 50];
                const monthlyPredictedData = [10, 15, 100, 60, 50, 10];
                const monthlyDates = [
                    '05/10', '10/10', '13/10', 
                    '17/10', '19/10', '20/10', 
                    '23/10', '24/10', '25/10', 
                    '26/10', '29/10', '30/10'
                ];

                setChartData({
                    dataValues: monthlyDataValues,
                    predictedData: monthlyPredictedData,
                    dates: monthlyDates,
                });
                break;
            default:
                break;
        }
    };
    
    const renderChart = () => {
        if (period === 'month') {
            if (chartType === 'linear') {
                if (chartData.dataValues.length > 0) {
                    return (
                        <LinearGraphGenerative 
                            dataValues={chartData.dataValues} 
                            predictedData={[chartData.dataValues[chartData.dataValues.length - 1], ...chartData.predictedData]}
                            dates={chartData.dates}  
                        />
                    );
                } else {
                    return <div>No hay datos disponibles</div>;
                }
            } else if (chartType === 'bar') {
                return (
                    <BarChartGenerative 
                        dataValues={chartData.dataValues} 
                        predictedData={chartData.predictedData}
                        dates={chartData.dates}
                    />
                );
            }
        } else if (chartType === 'linear') {
            return (
                <LinearGraphGenerative 
                    dataValues={chartData.dataValues} 
                    predictedData={[]} 
                    dates={chartData.dates}  
                />
            );
        } else if (chartType === 'bar') {
            return (
                <BarChart 
                    dataPoints={chartData.dataValues} 
                    labels={chartData.dates}
                />
            );
        }
        return null;
    };
    
    return (
        <Card sx={{ mt: 3 }}>
            <CardContent sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Expenses
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
                            onClick={() => {
                                setChartType('bar');
                                handlePeriodChange(period);
                            }}
                        >
                            <img 
                                src="/bar-removebg-preview.png" 
                                alt="bar" 
                                style={{ height: '10px', marginRight: '2px' }} 
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
