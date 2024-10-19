import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function TransactionsDoughnutChart() {
  const categories = {
    Expenses: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Others'],
    Income: ['Salary', 'Investments', 'Other'],
  };
  const colors = {
    Expenses: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ],
    Income: [
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
  };
  const [currentCategory, setCurrentCategory] = useState('Expenses');
  const [visibleCategories, setVisibleCategories] = useState(categories[currentCategory]);

  const data = {
    labels: categories[currentCategory],
    datasets: [
      {
        label: currentCategory,
        data: currentCategory === 'Expenses' ? [500, 300, 200, 100, 50] : [1000, 500, 300, 200, 100],
        backgroundColor: colors[currentCategory],
      },
    ],
  };

  const filteredData = {
    ...data,
    labels: data.labels.filter((label) => visibleCategories.includes(label)),
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.filter((value, index) => visibleCategories.includes(data.labels[index])),
      backgroundColor: dataset.backgroundColor.filter((color, index) => visibleCategories.includes(data.labels[index])),
    })),
  };

  const totalSum = filteredData.datasets[0].data.reduce((acc, value) => acc + value, 0);

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `Sum: ${value}`;
          },
        },
      },
      beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        ctx.restore();
        ctx.font = '20px Arial';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';

        const text = `Sum: ${totalSum}`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  };

  const toggleCategory = (category) => {
    setVisibleCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const switchCategory = (category) => {
    setCurrentCategory(category);
    setVisibleCategories(categories[category]);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent sx={{ p: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="div">
            Transactions in October
          </Typography>
          <Box sx={{ mt: 2 }}>
            {['Expenses', 'Income'].map((el) => (
              <Button
                variant="contained"
                onClick={() => switchCategory(el)}
                sx={{
                  mr: 1,
                  backgroundColor: currentCategory === el ? 'black' : '#aaa',
                  color: 'white',
                  fontSize: '0.75rem',
                  borderRadius: '8px',
                  padding: '4px 8px',
                }}
              >
                {el}
              </Button>
            ))}
          </Box>
          <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
            {categories[currentCategory].map((category, index) => (
              <Button
                key={category}
                variant={visibleCategories.includes(category) ? 'contained' : 'outlined'}
                onClick={() => toggleCategory(category)}
                sx={{
                  backgroundColor: visibleCategories.includes(category) ? colors[currentCategory][index] : 'transparent',
                  color: visibleCategories.includes(category) ? 'white' : 'inherit',
                  borderColor: colors[currentCategory][index],
                  fontSize: '0.75rem',
                  borderRadius: '8px',
                  padding: '4px 8px',
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center' }}>
          <Doughnut data={filteredData} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TransactionsDoughnutChart;
