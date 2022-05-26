// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChiqJu3ytsC3kQqCYYvWJxeCsZh7SvcK4",
  authDomain: "manufacture-hardware.firebaseapp.com",
  projectId: "manufacture-hardware",
  storageBucket: "manufacture-hardware.appspot.com",
  messagingSenderId: "992203585624",
  appId: "1:992203585624:web:1ae50f624ebe695ff5b22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
