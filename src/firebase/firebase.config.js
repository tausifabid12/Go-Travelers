// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm-eFqHLsiSVYVNYVvXjesrF0JIxh1R9o",
  authDomain: "go-travlers.firebaseapp.com",
  projectId: "go-travlers",
  storageBucket: "go-travlers.appspot.com",
  messagingSenderId: "6019274860",
  appId: "1:6019274860:web:b6ec9a2ebe357d041aa049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
