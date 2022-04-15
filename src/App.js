import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductInfo />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;