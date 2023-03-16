import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
   <section className="navbar-full">
    <div className="navbar-pc">
      <Link to='/'><h1>FASHION<span>CLUB</span></h1></Link>
      
      <div className="navbar-pc-links">
      <p><Link to='/'>HOME</Link></p>
      <p><Link to='/about'>ABOUT</Link></p>
        <p><Link to='/store'>STORE</Link></p>
       <p><Link to='/contact'>CONTACT</Link></p>
        <button>SIGN UP</button>
      </div>
    </div>


      <div className="navbar-mob">
      <FaBars className="toogle-btn" size={27} color="#8E24AA" onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
        <div className="navbar-mob-container slide-in-blurred-top">
          <div className="navbar-mob-container-svg">
          <GrClose size={25} color="#8E24AA" onClick={() => setToggleMenu(false)} />
          </div>
          <div className="navbar-mob-container-links">
            <p><Link to="/">HOME</Link></p>
      <p><Link to='/about'>ABOUT</Link></p>
            <p><Link to="/store">STORE</Link></p>
            <p><Link to="/contact">CONTACT</Link></p>
            <button type="button">Sign up</button>
          </div>
    
        </div>
        )}
      </div>
    </section>
  );
}
