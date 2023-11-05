import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

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
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);