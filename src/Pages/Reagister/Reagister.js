import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reagister.css";

const Reagister = () => {
  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/login");
  };
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef();
  const confromPasswordRef = useRef("");
  const handelSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = emailRef.current.value;
    const confromPassword = confromPasswordRef.current.value;
    console.log(name, email, password, confromPassword);
  };

  return (
    <div className="w-50 mx-auto reagister-from">
      <h2 className="text-center mt-5 text-primary"> Plasse Reagister</h2>
      <div className="from-container">
        <form onSubmit={handelSubmit}>
          <p>Name:</p>
          <input
            ref={nameRef}
            type="text"
            name="name"
            id=""
            placeholder="Type Your Name"
            required
          />
          <p>Email:</p>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id=""
            placeholder="Type Your Email"
            required
          />
          <p>Password:</p>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id=""
            placeholder="Type Your Password"
            required
          />
          <p>Confrom Password:</p>
          <input
            ref={confromPasswordRef}
            type="password"
            name="password"
            id=""
            placeholder="Type Your Confrom Password"
            required
          />
          <button className="bg-primary text-white rounded px-4 py-2 ">
            Submit Data
          </button>
        </form>
        <p>
          All ready have a accound{" "}
          <Link
            onClick={handelLogin}
            className=" text-decoration-none text-danger"
            c
            to={"/login"}
          >
            Plesse Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reagister;
