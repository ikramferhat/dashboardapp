import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@mui/material';
import './style.css';

const BarChart = ({data}) => {
    const series = data.series
    const options = {
      labels: data.labels,
      chart: {
        foreColor: '#9c9797',
        toolbar: {
          show: false
        },
        id: "simple-bar",
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      colors: ['#47C4B8','#ffc107'],
      stroke: {
        curve: 'smooth',
      }
    };
  return (
    <Box sx={{ overflow: 'hidden' }} dir="ltr">
      <ReactApexChart options={options} type="bar" series={series} height={364}/>
    </Box>
  )
}

export default BarChart;