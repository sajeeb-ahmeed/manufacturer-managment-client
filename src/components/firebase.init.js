// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4Fa6IITXTc6ASucdtaJcfnbdU9eNp-A",
  authDomain: "taz-dental.firebaseapp.com",
  projectId: "taz-dental",
  storageBucket: "taz-dental.appspot.com",
  messagingSenderId: "842975418722",
  appId: "1:842975418722:web:5c5a4465c90a91df2cf43b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
