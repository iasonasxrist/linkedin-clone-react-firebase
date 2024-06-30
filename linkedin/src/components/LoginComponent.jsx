// import React from 'react'
import { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Linkedin-Logo.png";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  let navigate = useNavigate();

  const login = async () => {
    try {
      const resp = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to LinkedIn");
      localStorage.setItem("userEmail", resp.user.email);
      // console.log(resp?.user);
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  const googleSignInProvider = async () => {
    let response = await GoogleSignInAPI();
    console.log(response);
  };

  return (
    <>
      <div className="login-wrapper">
        <img src={LinkedinLogo} alt="logo" className="linkedinLogo" />

        <div className="login-wrapper-inner">
          <h1 className="heading">Sign in</h1>
          <p className="sub-heading">Stay updated on your professional world</p>
          <div className="auth-inputs">
            <input
              type="email"
              className="common-input"
              placeholder="Email or Phone"
              onChange={(event) => {
                setCredentials({ ...credentials, email: event.target.value });
              }}
            />

            <input
              type="password"
              className="common-input"
              placeholder="Password"
              onChange={(event) => {
                setCredentials({
                  ...credentials,
                  password: event.target.value,
                });
              }}
            />

            {/* TODO Add forgot password button  */}
          </div>

          {/* TODO id="text-color:white;" */}
          <button onClick={login} className="login-btn">
            Log in to Linkedin
          </button>

          {/* <button onClick={""} className="login-btn">
            {" "}
            Forgot password
          </button> */}
        </div>

        <hr className="hr-text" data-content="or" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={googleSignInProvider} />

          <p className="go-to-signup">
            New to LinkedIn?
            <span className="join-now" onClick={() => navigate("/register")}>
              Join now
            </span>
          </p>
        </div>

        {/* Addd sign in with google and Apple */}
      </div>
    </>
  );
};

export default LoginComponent;
