import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaDollarSign,
  FaCartPlus,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/loading/Loading";
import "./singleProduct.css";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(await response.data);
        setLoading(false);
        setRating(await response.data.rating);
        console.log("rating", rating);
        console.log("product", product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      {loading ? ( 
        <Loading />
      ) : (
        <div className="singleItem-full section-margin">
          <div className="singleItem-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="singleItem-content">
            <h4>{product.category}</h4>
            <h2>{product.title}</h2>
            <h5>
              Rating {rating.rate} <FaStar />
            </h5>
            <h5>Bought by {rating.count} Customers</h5>
            <h3>
              <FaDollarSign />
              {product.price}/-
            </h3>
            <p>{product.description}</p>

            <span>
              <button className="button-1">
                <FaCartPlus />
                Add To Cart
              </button>
              <button className="button-2">
                <FaShoppingCart />
                Go To Cart
              </button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
