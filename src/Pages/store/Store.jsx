import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/loading/Loading";
import './store.css'

export default function Store() {
  //  const apiKey = 'https://api.pujakaitem.com/api/products';
  const apiKey = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filter, setFilter] = useState(data);
  // let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiKey);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

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
              <button>ALL</button>
              <button>Men's Wear</button>
              <button>Women's wear</button>
              <button>Jewelery</button>
              <button>Electronics</button>
            </div>
            <div className="store-content-products">
              {data.map((products) => {
                return (
                  <>
                    <div key={products.id} className="product-card">
                      <div className="product-card-img">
                        <img src={products.image} alt={products.title} />
                      </div>
                      <div className="product-card-content">
                        <div className="product-card-content-details">
                          <h4>{products.title}</h4>
                          <p>$ {products.price}/- only</p>
                        </div>
                        <button>View More</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
