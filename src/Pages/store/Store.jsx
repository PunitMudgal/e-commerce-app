import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/loading/Loading";
import './store.css'
import { Link } from "react-router-dom";

export default function Store() {
  //  const apiKey = 'https://api.pujakaitem.com/api/products';

  const apiKey = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiKey);
        setData(response.data);
        setFilter(response.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const filterProduct = (cate) => {
    const updatedList = data.filter((pro) => pro.category === cate);
    setFilter(updatedList)
  }

  return (
    <>
      <div className="section-padding">
        <div className="store-heading">
          <h1>Latest Products</h1>
          <hr />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="store-content">
            <div className="store-content-btn">
              <button onClick={() => setFilter(data)} >ALL</button>
              <button onClick={() => filterProduct("men's clothing")}>Men's Wear</button>
              <button onClick={() => filterProduct("women's clothing")}>Women's wear</button>
              <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
              <button onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
            <div className="store-content-products">
              {filter.map((products) => {
                return (
                    <div key={products.id} className="product-card box-shadow3">
                      <div className="product-card-img">
                        <img src={products.image} alt={products.title} />
                      </div>
                      <div className="product-card-content">
                        <div className="product-card-content-details">
                          <h4>{products.title}</h4>
                          <p>$ {products.price}/- only</p>
                        </div>
                        <Link to={`/singleProduct/${products.id}`}>Buy Now</Link>
                      </div>
                    </div>
                );
              })}
            </div> 
          </div>
        )}
      </div>
    </>
  );
}
