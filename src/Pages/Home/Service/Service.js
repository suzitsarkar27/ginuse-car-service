import React from "react";
import "./Service.css";

const Service = (Props) => {
  const { name, img, price, description } = Props.service;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 g-5">
      <div className="service-container text-center">
        <img className="service-img" src={img} alt="" />
        <h2>Name:{name}</h2>
        <div className="service-infro">
          <p>Price:{price}</p>
          <p>{description}</p>
        </div>

        <button className="service-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Service;
