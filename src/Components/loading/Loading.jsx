import React from "react";
import "./loading.css";
import loading from "../../assets/loding.gif";

export default function Loading() {
  return (
    <>
      <div className="feature-loading-img">
        <img src={loading} alt="loading" />
      </div>
    </>
  );
}
