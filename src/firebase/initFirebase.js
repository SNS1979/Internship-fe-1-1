// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZRyJ85RF66JgnYZW5XZE04tFCcC8pFV0",
  authDomain: "blog-news-fd6af.firebaseapp.com",
  databaseURL: "https://blog-news-fd6af-default-rtdb.firebaseio.com",
  projectId: "blog-news-fd6af",
  storageBucket: "blog-news-fd6af.appspot.com",
  messagingSenderId: "395644335171",
  appId: "1:395644335171:web:7066c81041ff4c030a50f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);