import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";
import Loader from "../helper/Loader";

export default function Home({ currentUser }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        console.log(res?.accessToken);
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
}
