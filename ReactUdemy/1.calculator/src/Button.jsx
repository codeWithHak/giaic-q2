import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white gap-2 rounded w-14 shadow-bottom-only border border-gray-300' style={{backgroundColor:props.bg, color:props.color}} onClick={props.onClick}>{props.number}</button>

    )
}

export default Button