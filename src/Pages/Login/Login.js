import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const PasswordRef = useRef("");
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/reagister");
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;
    console.log(email, password);
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center text-primary">Pless Login</h2>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={PasswordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to Genius Car ?
        <Link
          to={"/reagister"}
          className="text-danger reagister-link   text-decoration-none"
          onClick={handelNavigate}
        >
          Plesse Reagister
        </Link>
      </p>
    </div>
  );
};

export default Login;
