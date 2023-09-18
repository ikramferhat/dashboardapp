import React from 'react'
import './style.css';

const SmallButton = ({title, click, type}) => {
  return (
    <button className='btn small' onClick={click}>
      {title}
    </button>
  )
}

const LargeButton = ({title, click, type}) => {
    return (
      <button className='btn large' onClick={click} type={type}>
        {title}
      </button>
    )
  }

export {SmallButton, LargeButton};