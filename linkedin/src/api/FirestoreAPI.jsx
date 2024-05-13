import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebaseConfig.js";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");

export const postStatus = (status) => {
  let object = { status: status };

  addDoc(dbRef, object)
    .then(() => {
      toast.success("Document added successfully!");
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something may went wrong!");
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

// export const postUserData = (object) => {
//   addDoc(userRef, object)
//     .then(() => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };
