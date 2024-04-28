import React from "react";
import { postUserData } from "../api/FirestoreAPI";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [credentials, setCredentials] = useState({});

  let navigate = useNavigate();

  const register = async () => {
    try {
      // Add toast pop up messages
      const resp = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Registered in LinkedIn");
      navigate("/home")
      // postUserData({
      //   userID: uuid(),
      //   name: credentials.name,
      //   email: credentials.email
      // })
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }

  return (  
    
      <div className="login-wrapper">
        <img
          src={LinkedinLogo}
          className="linkedinLogo"
        />

        <div className="login-wrapper-inner">
          <h1 className="heading">Register</h1>
          <p className="sub-heading">Stay updated on your professional world</p>

          <div className="auth-inputs">
        <input
        type="text"
        className="common-input"
        placeholder="zhiskas"
        onChange={(event) => {
          setCredentials({ ...credentials, name: event.target.value });
        }}
        />          
        
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
          </div>       

          <button onClick={register} className="login-btn">
            Signin
          </button>
        </div>
      </div>
    
  );
}



export default RegisterComponent;

//   GoogleButton onClick={googleSignIn}
//   Already on Linkedin ?  Navigate to Signin

