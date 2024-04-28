import { addDoc } from "firebase/firestore"
import { useRef } from "react"

export const postUserData = (object) =>{
    addDoc(userRef,object)
    .then(()=>{

    })
    .catch((error)=>{
        console.log(error);
    })

}