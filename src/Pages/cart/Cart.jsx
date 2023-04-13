import React, { useEffect, useState } from "react";
import { AuthUser } from "../../context/AuthContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import "./cart.css";
// import Notification from "../../Components/notifications/Notification";

export default function Cart() {
  const [items, setItems] = useState([]);

  const { user } = AuthUser();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user.displayName}`), (doc) => {
      setItems(doc.data()?.savedItems);
    });
  }, [user]);

  const itemRef = doc(db, "users", `${user.displayName}`);

  const removeFromCart = async (passedId) => {
    try {
      const result = items.filter((item) => item.id !== passedId);
      await updateDoc(itemRef, {
        savedItems: result,
      });

    } catch (error) {
      console.log(error);
    }
  };
  console.log("items", items);


  return (
    <>
      <div className="cart-full ">
        <h5>
          Welcome <span>{user.displayName}</span>
        </h5>
        <h1>Your PRODUCT CART</h1>

        {items.length > 0 ? (
          <div className="store-content-products">
            {items.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-card-img">
                  <img src={prod.img} alt={prod.title} />
                </div>
                <div className="product-card-content">
                  <div className="product-card-content-details">
                    <h4>{prod.title}</h4>
                    <p>$ {prod.price}/- only</p>
                  </div>
                  <button onClick={() => removeFromCart(prod.id)}>
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>~Cart Empty~</h3>
        )}
      </div>
    </>
  );
}
