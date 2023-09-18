import React from 'react';
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
