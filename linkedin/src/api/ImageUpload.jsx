import { storage } from "../firebaseConfig";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";

export const uploadImage = (
    file,
    setPostImage, 
    setProgress
)=>{
    const postPicRef = ref(storage, `postImages/${file.name}`);
    const uploadTask = uploadBytesResumable(postPicRef, file)
    
    uploadTask.on(
        "state_changed",
        (snapshot)=>{
            const progress = Math.round( (snapshot.bytesTransferred/ snapshot.totalBytes) *100);
            setProgress(progress);
            
            console.log(progress);
        },
        (error)=>{
            console.error(error);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((response)=>{
                setPostImage(response)
            })
        }
    )
}
