import React from 'react';
import { NavLink } from 'react-router-dom';
import './product.css';

export default function Product(props) {
  return (
    <>
    <NavLink to={`singleproduct/${props.id}`} className="feature-image">
    <img src={props.image} alt="ImgNotFound" />
    <div className='feature-content'>
    <p className='feature-image-name'>{props.name}</p>
    <p className='feature-image-price'>&#8377;{props.price}</p>
    </div>
    <figcaption className='feature-gradient'></figcaption>
  </NavLink>
  </>
  )
}
