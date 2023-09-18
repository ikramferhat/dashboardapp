import React, { useState } from 'react'
import { Container, Grid } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Page, Section } from '../../components/Page';
import { LineChart, BarChart, RadialBar } from '../../components/Chart';
import { BarLineChartDATA, RadialChartDATA } from '../../components/Chart/CHARTDATA';
import './style.css';

const Statistics = () => {
  const [chart, setChart] = useState('bar');

  const MenuBtn = (props) => {
    return (
      <button onClick={props.onClick} className='menu-btn'>
        {props.children}
      </button>
    )
  }

  return (
    <div id="statistics">
      <Container maxWidth="xl">
        <Page>
          <Grid item xs={12} sm={6}>
            <div className='title'>
              <h3>Statistics</h3>
            </div>
          </Grid>
          <Grid container sx={{mt: 5}}>
            <Grid item xs={12} md={12} sx={{mt: 2, p: 2}}>
              <Section>
                <div className='title'>
                  <h3>total transactions</h3>
                  <div className='row'>
                    <MenuBtn onClick={()=> setChart('line')}>
                      <ShowChartIcon style={{ color: chart === 'line' ? '#fc8181' : 'lightgrey' }} />
                    </MenuBtn>
                    <MenuBtn onClick={()=> setChart('bar')}>
                      <SignalCellularAltIcon style={{ color: chart === 'bar' ? '#fc8181' : 'lightgrey' }} />
                    </MenuBtn>
                  </div>
                </div>
                {chart === 'line' ? (
                  <LineChart data={BarLineChartDATA} />
                ) : (
                  <BarChart data={BarLineChartDATA} />
                )}
              </Section>
            </Grid>
            <Grid item xs={12} md={7} sx={{mt: 2, p: 2}}>
              <Section>
                <div className='title'>
                  <h3>transaction ratio</h3>
                </div>
                <RadialBar data={RadialChartDATA} />
              </Section>
            </Grid>
          </Grid>
        </Page>
      </Container>
    </div>
  )
}

export default Statistics;
