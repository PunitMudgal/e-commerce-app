import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className=" xyz_navbar">
        <div className="xyz_navbar-links_logo">
          <Link to="/">XYZ Shopping</Link>
        </div>
      <div className="xyz_navbar-links">
        <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/store">Store</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        <button className="xyz_navbar-sign" type="button">Sign Up</button>
      </div>

      <div className="xyz_navbar-menu">
        {toggleMenu ? (
          <GrClose size={27} color="#8E24AA" onClick={() => setToggleMenu(false)} />
        ) : (
          <FaBars className="toogle-btn" size={27} color="#8E24AA" onClick={() => setToggleMenu(true)} />
        )}

          {toggleMenu && (
        <div className="xyz_navbar-menu_container slide-in-blurred-top">
          <div className="xyz_navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/store">Store</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
          </div>
          <div className="xyz_navbar-menu_container-links-sign">
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
