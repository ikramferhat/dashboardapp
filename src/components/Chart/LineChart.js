import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@mui/material';
import './style.css';

const LineChart = ({data}) => {
  const series = data.series
  const options = {
      labels: data.labels,
      chart: {
        foreColor: '#9c9797',
        toolbar: {
          show: false
        },
        id: "simple-line",
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
      <ReactApexChart options={options} type="line" series={series} height={364}/>
    </Box>
  )
}

export default LineChart;