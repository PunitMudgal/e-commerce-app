import React from 'react'
import './cards.css'
// import {FaShippingFast, FaUndo, FaDollarSign, FaStopwatch} from 'react-icons/fa';

export default function Cards(props) {
  return (
    <div className='card-full '>
        <div className='card-image'>
           {props.icon}
        </div>
        <div className='card-content'>
            <h4>{props.title}</h4>
            <p>{props.des}</p>
        </div>
    </div>
  )
}
