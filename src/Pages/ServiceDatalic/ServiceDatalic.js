import React from "react";
import { useParams } from "react-router-dom";

const ServiceDatalic = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>this is service datlice{serviceId}</h2>
    </div>
  );
};

export default ServiceDatalic;
