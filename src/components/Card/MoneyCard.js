import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { Icon } from '@mui/material';
import './style.css';

const MoneyCard = ({percent, value, income}) => {
  return (
    <div className='progress-card'>
      <div className='info'>
        <div className='row'>
          <Icon component={income ? CallMadeIcon : CallReceivedIcon } sx={{ color: income ? '#35beb1' : '#fc8181', fontSize: '15px', marginRight: 1 }} />
          <p>{income ? "total income" : "total expense"}</p>
        </div>
        <p>$ {value}</p>
        <p className='small-p' style={{ color: income ? '#35beb1' : '#fc8181' }}>{percent}% this week</p>
      </div>
    </div>
  )
}

export default MoneyCard;