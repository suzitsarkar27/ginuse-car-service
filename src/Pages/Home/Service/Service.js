import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateToService = (id) => {
    navigate(`/service/${id}`);
  };
  const { id, description, img, name, price } = service;
  return (
    <div className="col-ms-12 col-md-6 col-lg-4 col-xl-3 g-5 text-center">
      <div id="service" className="service-comtainer ">
        <img className="w-100" src={img} alt="" />
        <h2>Name:{name}</h2>
        <p>Price:{price}</p>
        <p>{description}</p>
        <button onClick={() => navigateToService(id)} className="servie-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Service;
