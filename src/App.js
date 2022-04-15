import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
