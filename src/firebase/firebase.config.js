// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApVF9bW_-6GltS5d2H_w0KAFKDzfQZ3Dg",
  authDomain: "multiverse-toys.firebaseapp.com",
  projectId: "multiverse-toys",
  storageBucket: "multiverse-toys.appspot.com",
  messagingSenderId: "195871222000",
  appId: "1:195871222000:web:c232d99bd1a741ae20ba35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;