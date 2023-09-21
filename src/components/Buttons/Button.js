import React from 'react'
import './style.css';

const Button = (props) => {
  return (
    <button
      className={`btn ${props.small ? 'small' : 'large'}`}
      onClick={props.click}
      type={props.type}
    >
      {props.title}
    </button>
  )
}
export default Button;