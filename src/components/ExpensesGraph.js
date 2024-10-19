import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import LinearChart from './graphs/LinearGraph.js'; 

function ExpensesGraph() {
    // Estado para almacenar los datos y las fechas del gráfico
    const [chartData, setChartData] = useState({
        dataValues: [2000000, 1000, 1200000, 160000, 20000, 30000],
        dates: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    });

    // Función para cambiar los datos del gráfico según el periodo seleccionado
    const handlePeriodChange = (period) => {
        switch (period) {
            case 'thisYear':
                // Cambia estos valores a los que correspondan para "This Year"
                setChartData({
                    dataValues: [300, 200, 450, 350, 600, 800], // Ejemplo de datos
                    dates: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Ejemplo de fechas
                });
                break;
            case 'last3Months':
                // Cambia estos valores a los que correspondan para "Last 3 Months"
                setChartData({
                    dataValues: [400, 350, 300], // Ejemplo de datos
                    dates: ['Apr', 'May', 'Jun'], // Ejemplo de fechas
                });
                break;
            case 'lastMonth':
                // Cambia estos valores a los que correspondan para "Last Month"
                setChartData({
                    dataValues: [400, 350, 250, 600, 700, 550, 300, 450, 400], // Ejemplo de datos
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

    const buttonStyle = {
        borderRadius: '20px',
        marginLeft: '10px',
        textTransform: 'none',
        padding: '4px 8px',
        fontSize: '0.6rem',
    };

    return (
        <Card
            sx={{
                mt: 3,
            }}
        >
            <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography component="div" sx={{ mr: 2, fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Expenses
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" sx={buttonStyle} onClick={() => handlePeriodChange('thisYear')}>This Year</Button>
                    <Button variant="outlined" sx={buttonStyle} onClick={() => handlePeriodChange('last3Months')}>Last 3 Months</Button>
                    <Button variant="outlined" sx={buttonStyle} onClick={() => handlePeriodChange('lastMonth')}>Last Month</Button>
                </Box>
            </CardContent>
            <CardContent sx={{ p: 3, width: '96%', height: '100%' }}>
                <LinearChart 
                    dataValues={chartData.dataValues} 
                    dates={chartData.dates} 
                    chartType="expenses" 
                    size="small"
                />
            </CardContent>
        </Card>
    );
};

export default ExpensesGraph;
