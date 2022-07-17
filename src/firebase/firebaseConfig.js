import { initializeApp } from "firebase/app";
import { getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDqyuckr7KOHBE1wxUbmznxgUB2r1nzavg",
  authDomain: "ofis-cda85.firebaseapp.com",
  projectId: "ofis-cda85",
  storageBucket: "ofis-cda85.appspot.com",
  messagingSenderId: "571743457392",
  appId: "1:571743457392:web:1cc42a88daf052d0a264b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage, uploadBytesResumable, ref, getDownloadURL}