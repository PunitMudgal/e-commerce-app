import React from "react";
import { useProductContext } from "../../context/productContext";
import "./featureProducts.css";
import Product from "../product/Product";
import Loading from "../loading/Loading";

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
            <Loading />
          ) : (
            featureProducts.map((prod) => {
              return <Product key={prod.id + prod.name} item={{ ...prod }} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
