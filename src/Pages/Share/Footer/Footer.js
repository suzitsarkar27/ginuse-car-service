import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center p-5 bg-light mt-5">
      <p>
        <small>Coppyright @{year}</small>
      </p>
    </div>
  );
};

export default Footer;
