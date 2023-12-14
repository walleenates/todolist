import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Header from "./components/Header";

function App() {
 
    
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='Login' element={<LoginPage />} />
          <Route path="Signup" element={<SignupPage />} />
      </Routes>
      </BrowserRouter>
    </>
    );
}
export default App;