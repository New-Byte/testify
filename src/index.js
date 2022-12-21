import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home_Page/Home';
import Forgot_Passwd_Success from './Components/Authentication/Forgot_Passwd_Success';
import ForgotPassword from './Components/Authentication/Forgot_password';
import ResetPassword from './Components/Authentication/Reset_password';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route index element={<App />}></Route>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Forgot_password" element={<ForgotPassword />}></Route>
            <Route path="Forgot_Passwd_Success" element={<Forgot_Passwd_Success />}></Route>
            <Route path="Reset_password" element={<ResetPassword />}></Route>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
