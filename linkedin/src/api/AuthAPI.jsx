import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = (email, password) => {
    try {
      let response = createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (err) {
      return err;
    }
  };
  