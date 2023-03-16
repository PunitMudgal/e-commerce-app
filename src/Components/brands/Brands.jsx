import React from 'react';
import './brands.css'
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';

export default function Brands() {
  return (
    <div className='xyz-brand section-padding'> 
        <h3>Trusted by <span>100+</span> brands</h3>
        <hr />
    <div className='xyz-brand-image'>
            <img src={brand1} height={40} alt="brand1" />
            <img src={brand2} height={60} alt="brand2" />
            <img src={brand3} height={90} alt="brand3" />
            <img src={brand4} height={90} alt="brand4" />
            <img src={brand5} height={90} alt="brand5" />
    </div>
    <hr />

    </div>
  )
}
