import React from "react";
import { useNavigate } from "react-router-dom";
import "./Expart.css";

const Expart = ({ data }) => {
  const { id, img, name, descripton, price } = data;
  const navigate = useNavigate();
  const navigateToService = (id) => {
    navigate(`/service/ ${id}`);
  };
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-5
    text-center"
    >
      <div className="service-comtainer">
        <img className="w-100" src={img} alt="" />
        <h2>Name:{name}</h2>
        <p>Price{price}</p>
        <p>{descripton}</p>
        <button onClick={() => navigateToService(id)} className="servie-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Expart;
