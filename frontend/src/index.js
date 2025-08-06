import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

// import Dashboard from '../src/dashboard/src/components/Home'
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login'
import Home from './landing_page/signup/Home';
import About from './landing_page/about/About';
import Products from './landing_page/product/Products';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Support" element={<Support />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


