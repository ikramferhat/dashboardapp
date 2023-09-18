import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@mui/material';
import './style.css';

const PieChart = ({data}) => {
    const series = data.series
    const options = {
        chart: {
          foreColor: '#9c9797',
          width: 380,
          type: 'pie',
          },
          labels: data.labels,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: '100%'
              },
              legend: {
                position: 'top',
                labels: {
                  colors: ['#f585b8','#47C4B8','#ffbe0a'],
                  useSeriesColors: false,       
                },
              }
            }
          }],
      colors: ['#f585b8','#47C4B8','#ffbe0a'],
    };
  return (
    <Box sx={{ overflow: 'hidden' }} dir="ltr">
      <ReactApexChart options={options} series={series} type="pie"/>
    </Box>
  )
}

export default PieChart;