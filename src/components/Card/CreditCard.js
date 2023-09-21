import React from 'react';
import { ImagesAssets } from '../../images';
import './style.css';

const CreditCard = (props) => {
  return (
    <div className='card' onClick={props.click}>
      {props.amount && (
        <div className='amount-card'>
          <p>${props.item.currentBalance}</p>
        </div>
      )}
      <div className="gradian">
        <div className='content-row chip-top'>
          <img src={ImagesAssets.masterCard} />
          <img src={ImagesAssets.chip} />
        </div>
        <div className='content-row mt center-nbr'>
          <p>****</p>
          <p>****</p>
          <p>****</p>
          <p>{props.item.cardNumber.slice(-4)}</p>
        </div>
        <div className='content-row mt small-p'>
          <p>CARD HOLDER</p>
          <p>VALID TILL</p>
        </div>
        <div className='content-row'>
          <p>{props.item.cardHolder}</p>
          <p>{props.item.valid.m} / {props.item.valid.y}</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCard;
