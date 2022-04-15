import React from "react";
import "./Exports.css";
import expart1 from "..//..//..//images/experts/expert-1.jpg";
import expart2 from "../../../images/experts/expert-2.jpg";
import expart3 from "../../../images/experts/expert-3.jpg";
import expart4 from "../../../images/experts/expert-4.jpg";
import expart5 from "../../../images/experts/expert-5.jpg";
import expart6 from "../../../images/experts/expert-6.png";
import Expart from "../Expart/Expart";
const datas = [
  {
    id: 1,
    name: "Enginer Mishu",
    img: expart1,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
  {
    id: 2,
    name: "Enginer Suzit",
    img: expart2,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
  {
    id: 3,
    name: "Enginer Dipok",
    img: expart3,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
  {
    id: 4,
    name: "Enginer Uttom",
    img: expart4,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
  {
    id: 5,
    name: "Enginer Uttom",
    img: expart5,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
  {
    id: 6,
    name: "Enginer Uttom",
    img: expart6,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, enim?",
    price: "200",
  },
];

const Exparts = () => {
  return (
    <div className="container" id="exparts">
      <h2 className="text-center text-danger mt-5">Our Expart Engineer</h2>
      <div className="row ">
        {datas.map((data) => (
          <Expart data={data} key={data.id}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
