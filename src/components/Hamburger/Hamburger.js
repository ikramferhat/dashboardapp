import React from 'react'
import './style.css'

const Hamburger = ({ isOpen }) => {
  return (
    <div className="hamburger">
      <div style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}} />
      <div
        style={{opacity: isOpen ? '0' : '1', transform: isOpen ? 'translateX(20px)' : 'translateX(0)'}}
      />
      <div style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}} />
    </div>
  )
}

export default Hamburger;