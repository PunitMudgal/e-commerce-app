import React from 'react'
import {FaInstagram, FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa';
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-full section-padding'>
        <div className='footer-content'>
          <h5>FASHION<span>CLUB</span></h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <p className='footer-content-copyright'>
          &#169; PUNIT_SHARMA ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className='footer-icons'>
          <FaInstagram className='social-icon' size={45}/>
          <FaTwitter className='social-icon' size={45} />
          <FaGithub className='social-icon' size={45}/>
          <FaLinkedinIn className='social-icon' size={45} />
        </div>
    </div>
  )
}
