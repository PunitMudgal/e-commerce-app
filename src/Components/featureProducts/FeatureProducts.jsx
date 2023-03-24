import React from "react";
import loading from '../../assets/loding.gif';
import { useProductContext } from "../../context/productContext";
import './featureProducts.css';
import Product from '../product/Product'

export default function FeatureProducts() {
  const { isLoading, featureProducts } = useProductContext();
  // console.log("feature Products", featureProducts);

  return (
    <>
    <div className="feature-full section-margin">
      <div className="feature-text">
        <p>Check Now</p>
        <h3>OUR FEATURE SERVICES</h3>
      </div>
      <div className="feature-image-all">
      {isLoading ? (
        <div className="feature-loading-img">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        featureProducts.map((prod) => {
          return (
          <Product key={prod.id} {...prod}  />
          );
        })
      )}
      </div>
      </div>
    </>
  );
}
