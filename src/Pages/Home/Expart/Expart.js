import React from "react";
import "./Expart.css";

const Expart = ({ data }) => {
  const { img, name } = data;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-5">
      <div className="expart-engaineer container">
        <img className="img-container w-100" src={img} alt="" />
        <h2>Name:{name}</h2>
        <button className="service-button">Book Now</button>
      </div>
    </div>
  );
};

export default Expart;
