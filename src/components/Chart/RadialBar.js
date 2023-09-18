import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@mui/material';
import './style.css';

const RadialBar = ({data}) => {
    const series = data.series
    const options = {
      labels: data.labels,
      chart: {
        height: 350,
        type: 'radialBar',
      },
      legend: {
        position: 'top',
        labels: {
          useSeriesColors: false,       
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            show: true,
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
          }
        }
      },
      colors: ['#47C4B8','#ffbe0a'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 0,
        offsetY: 0,
        labels: {
          useSeriesColors: true,
        },
      }
    };
  return (
    <Box sx={{ overflow: 'hidden' }} dir="ltr">
      <ReactApexChart options={options} series={series} type="radialBar" />
    </Box>
  )
}

export default RadialBar;