import React from "react";
import "./home.css";
import Fashion from "../../assets/fashion-white-bg2.jpg";
import Cards from "../../Components/cards/Cards";
import {FaShippingFast, FaUndo, FaDollarSign, FaStopwatch} from 'react-icons/fa';
import FeatureProducts from "../../Components/featureProducts/FeatureProducts";
// import Fashion from '../../assets/fashion-purple-bg.jpg'
// import Fashion from '../../assets/fashion-blue-bg.jpg'

export default function Home() {

  const cardDetails = [
    {
      title: 'FREE SHIPPING',
      des: 'Suffered Alteration in Some Form',
      icon: <FaShippingFast  className='icon' size={50} />,
    },
    {
      title: 'CASH ON DELIVERY',
      des: 'The Internet Tend To Repeat',
      icon: <FaDollarSign  className='icon' size={50} />,
    },
    {
      title: '45 DAYS RETURN',
      des: 'Making it Look Like Readable',
      icon: <FaUndo  className='icon' size={50} />,
    },
    {
      title: 'OPENING ALL WEEK',
      des: '8AM - 09PM',
      icon: <FaStopwatch  className='icon' size={50} />,
    }
  ]

  return (
    <>
      <div className="home-image">
        <img src={Fashion} alt="fashion-Lady" />
      {/* black gradient */}
      <div className="home-gradient" />
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

<FeatureProducts/>

{/* perks */}
<div className="home-perks section-margin">
{cardDetails.map((items) => 
  <Cards title={items.title} des={items.des} icon={items.icon} key={items.title} />
)}
</div>
    </>
  );
}
