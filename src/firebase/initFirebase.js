// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZB_qF13V8yNDeDeLlAwovoSk1YYmnnk4",
  authDomain: "fir-1-e8265.firebaseapp.com",
  databaseURL: "https://fir-1-e8265-default-rtdb.firebaseio.com",
  projectId: "fir-1-e8265",
  storageBucket: "fir-1-e8265.appspot.com",
  messagingSenderId: "254237695213",
  appId: "1:254237695213:web:03c9b229013f37141cc0e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);