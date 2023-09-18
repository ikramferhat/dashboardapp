import React from 'react';
import CircularProgressWithLabel from '../Progress/Circular';
import './style.css';

const SimpleCard = ({title, money, value }) => {
  return (
    <div className='progress-card'>
      <div className='info'>
        <p>{title}</p>
        <p>{money && '$'} {value}</p>
      </div>
    </div>
  )
}

export default SimpleCard;

/*<CircularProgressWithLabel variant="determinate"  value={75} />*/