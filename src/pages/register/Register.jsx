import React from "react";
import "./Register.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  console.log(Password);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className={"logo"}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimitade movies, TV </h1>
        <h1>programmes, and more. </h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          // email=
          <div className="input">
            <input
              type="email"
              placeholder="Email address"
              ref={emailRef}
              required
            />
            <button
              className="registerButton"
              onClick={handleEmail}
              type={"submit"}
            >
              <h3>Get Started</h3>
              <ChevronRightIcon />
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="enter password"
              ref={passwordRef}
            />
            <button
              className="registerButton"
              onClick={handlePassword}
              type={"submit"}
            >
              <h3>Start</h3>
              <ChevronRightIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
