import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_u0YUfRFKo8U2ooSG-ZM_zcRZn9tjR8",
  authDomain: "team-scams.firebaseapp.com",
  projectId: "team-scams",
  storageBucket: "team-scams.appspot.com",
  messagingSenderId: "18464962562",
  appId: "1:18464962562:web:138b17642b5ac4abc6cf1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//import the function from the realtime database module
// import { getDatabase } from 'firebase/database';
// Get a reference to the database service
// const db = getDatabase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);