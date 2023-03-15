import React from 'react'
import shopping from "../../assets/shopping.png"
import './home.css'

export default function Home() {
  return (
    <div className='xyz-home'>
      <div className='xyz-home-image'>
        {/* <img src={shopping} alt="shopping png" /> */}
      </div>
      <div className='xyz-home-content'>
      <p className='xyz-home-content-welcome'>Welcome To</p>
      <h1>XYZ Shopping</h1>
      <p className='xyz-home-contect-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore architecto, placeat qui cum asperiores laboriosam mollitia molestiae facilis modi illum aliquam rem corporis harum nemo numquam vitae est quod</p>
      </div>
    </div>
  )
}
