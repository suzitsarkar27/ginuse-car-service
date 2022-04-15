import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (Props) => {
  const { id, name, img, price, description } = Props.service;
  const navigate = useNavigate();
  const navigateToService = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 g-5 ">
      <div className="service-container text-center container">
        <img className="img-container w-100" src={img} alt="" />
        <h2>Name:{name}</h2>
        <div className="service-infro">
          <p>Price:{price}</p>
          <p>{description}</p>
        </div>

        <button
          onClick={() => navigateToService(id)}
          className="service-button"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Service;
