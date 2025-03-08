import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY6Qcgikj2o2pcqgh_uafPVuv96bmE5mc",
  authDomain: "my-react-blog-cca89.firebaseapp.com",
  projectId: "my-react-blog-cca89",
  storageBucket: "my-react-blog-cca89.firebasestorage.app",
  messagingSenderId: "590217813638",
  appId: "1:590217813638:web:d0c95472f07b4029bafb07"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
