import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LargeButton } from '../Buttons/Button';
import { AddCreditCardForm } from '../Form';
import './style.css';

const RightSidebar = ({open,close,data}) => {
  const [add, setAdd] = useState(false);

  return (
    <div>
      {open && <div className="sidebarOverlay" onClick={close} />}
      <div className='sidebar right' style={{ transform: open ? 'translateX(0%)' :  'translateX(100%)'}}>
        <div className='container'>
          {add && (
            <IconButton onClick={() => setAdd(false)}>
              <ArrowBackIcon style={{ fontSize: "20px", color: 'grey' }} />
            </IconButton>
          )}
          <div className='wrapper' style={{transform: add && 'translateX(100%)' }}>
            <div className='title'>
              <h3>card information</h3>
            </div>
            <div className='row'>
              <p>current balance</p>
              <p>{data.currentBalance} $</p>
            </div>
            <div className='row'>
              <p>status</p>
              <p className='active'>active</p>
            </div>
            <div className='row'>
              <p>type of card</p>
              <p>{data.type}</p>
            </div>
            <div className='row'>
              <p>card holder</p>
              <p>{data.cardHolder}</p>
            </div>
            <div className='row'>
              <p>expiration date</p>
              <p>{data?.valid?.m} / {data?.valid?.y}</p>
            </div>
            <div className='bottom'>
              <LargeButton title="add new card" click={() => setAdd(true)} />
            </div>
          </div>
          <div className='wrapper add-card' style={{transform: add && 'translateX(0)' }}>
            <div className='title'>
              <h3>add a new credit card</h3>
            </div>
            <AddCreditCardForm />
          </div>
        </div>
      </div>
   </div>
  )
}

export default RightSidebar;