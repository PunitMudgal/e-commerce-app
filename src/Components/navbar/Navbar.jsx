import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthUser } from "../../context/AuthContext";
import avatar from "../../assets/user.jpg";

export default function Navbar() {
  const { googleSignIn, user, logOut } = AuthUser();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="navbar-full">
      <div className="navbar-pc">
        <Link to="/">
          <h1>
            FASHION<span>CLUB</span>
          </h1>
        </Link>

        <div className="navbar-pc-links">
          <p>
            <Link to="/">HOME</Link>
          </p>
          <p>
            <Link to="/about">ABOUT</Link>
          </p>
          <p>
            <Link to="/store">STORE</Link>
          </p>
          <p>
            <Link to="/contact">CONTACT</Link>
          </p>

          <Link to="/cart">
            <FaShoppingCart size={25} />
          </Link>

          <div onClick={handleGoogleSignIn} className="navbar-userDetails">
            <img src={user?.email ? user?.photoURL : avatar} alt="avatar" />
          </div>
          
          {user?.email ? (
            <button className="navbar-logout-btn" onClick={handleLogOut}>
              Logout
            </button>
          ) : ''}

        </div>
      </div>

      <div className="navbar-mob">
        <FaBars
          className="toogle-btn"
          size={27}
          color="#8E24AA"
          onClick={() => setToggleMenu(true)}
        />

        <div onClick={handleGoogleSignIn} className="navbar-userDetails-mob">
          <img src={user?.email ? user?.photoURL : avatar} alt="avatar" />
        </div>

        {toggleMenu && (
          <div className="navbar-mob-container">
            <div className="navbar-mob-container-svg">
              <GrClose
                size={25}
                color="#8E24AA"
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <div className="navbar-mob-container-links">
              <p>
                <Link to="/">HOME</Link>
              </p>
              <p>
                <Link to="/about">ABOUT</Link>
              </p>
              <p>
                <Link to="/store">STORE</Link>
              </p>
              <p>
                <Link to="/contact">CONTACT</Link>
              </p>
              {user?.email ? (
                <button
                  className="navbar-logout-btn-mob"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="navbar-login-btn-mob"
                  onClick={handleGoogleSignIn}
                >
                  SIGN UP
                </button>
              )}
              <p>
                <Link to="/cart">
                  <FaShoppingCart size={25} />
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
