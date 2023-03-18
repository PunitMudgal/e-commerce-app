import React from "react";
import "./home.css";
import Fashion from "../../assets/fashion-white-bg2.jpg";
// import Fashion from '../../assets/fashion-purple-bg.jpg'

export default function Home() {
  return (
    <>
      <div className="home-image">
        <img src={Fashion} alt="fashion-Lady" />
      {/* black gradient */}
      <div className="gradient" />
      </div>

      {/* text */}
      <div className="home-content">
        <p>SPRING / SUMMER COLLECTION 2023</p>
        <h1>
          Get up to 30% Off
          <br /> New Arrivals
        </h1>
        <a href="/">SHOP NOW</a>
      </div>

    </>
  );
}
