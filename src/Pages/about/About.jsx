import React from 'react';
import shopping from "../../assets/shopping.png";
import Brands from '../../Components/brands/Brands';
import './about.css';

export default function About() {
  return (
    <section>
    <div className='xyz-about section-padding'>
      <div className='xyz-about-content slide-in-left'>
      <p className='xyz-about-content-welcome'>Welcome To</p>
      <h1>FASHION<span>CLUB</span></h1>
      <p className='xyz-about-contect-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore architecto, placeat qui cum asperiores laboriosam mollitia molestiae facilis modi illum aliquam rem corporis harum nemo numquam vitae est quod</p>
      </div>
      <div className='xyz-about-image box-shadow2 slide-in-right'>
        <img src={shopping} alt="shopping png" />
      </div>
    </div>

    <Brands />

    </section>
  )
}
