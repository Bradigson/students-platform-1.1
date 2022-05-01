// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwJzdfsEjMs-BtCFOXZw7PQClHJ4KBtHg",
  authDomain: "students-platform-e7f6d.firebaseapp.com",
  projectId: "students-platform-e7f6d",
  storageBucket: "students-platform-e7f6d.appspot.com",
  messagingSenderId: "991709176872",
  appId: "1:991709176872:web:fa943dc1e8cbc54660411d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;