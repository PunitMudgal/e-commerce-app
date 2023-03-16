import React from 'react';
import shopping from "../../assets/shopping.png";
import Brands from '../../Components/brands/Brands';
import './home.css';

export default function Home() {
  return (
    <section>
    <div className='xyz-home section-padding'>
      <div className='xyz-home-content slide-in-left'>
      <p className='xyz-home-content-welcome'>Welcome To</p>
      <h1>XYZ Shopping</h1>
      <p className='xyz-home-contect-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore architecto, placeat qui cum asperiores laboriosam mollitia molestiae facilis modi illum aliquam rem corporis harum nemo numquam vitae est quod</p>
      </div>
      <div className='xyz-home-image box-shadow2 slide-in-right'>
        <img src={shopping} alt="shopping png" />
      </div>
    </div>

    <Brands />

    </section>
  )
}
