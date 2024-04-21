// import React from 'react'
import { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginAPI, RegisterAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      // Add toast pop up messages
      const resp = await LoginAPI(credentials.email, credentials.password);
      console.log(resp?.user);
    } catch (err) {
      console.log(err);
    }
  };

  // const forgotpass = asyn () =>{
  //   try{
  //     const resp  = await 
  //   }
  // }

  return (
    <>
      <div className="login-wrapper">
        <img
          // Add image
          src={"/linkedin/public/Linkedin-Logi.png"}
          className="linkedinlogo"
        />

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
          <button onClick={forgotPass} className="login-btn"> Forgot password</button>
        </div>

        {/* Addd sign in with google and Apple */}
      </div>
    </>
  );
};


export default LoginComponent;
