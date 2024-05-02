import { addDoc } from "firebase/firestore"

export const postUserData = (object) =>{
    addDoc(userRef, object)
    .then(()=>{

    })
    .catch((error)=>{
        console.log(error);
    })

}