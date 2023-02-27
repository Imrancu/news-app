// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBrbygT_HOU9gCcVyILPbePujildwI0kI",
  authDomain: "news-website-27fa6.firebaseapp.com",
  projectId: "news-website-27fa6",
  storageBucket: "news-website-27fa6.appspot.com",
  messagingSenderId: "1051215098948",
  appId: "1:1051215098948:web:59c7b539788f274516f811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;