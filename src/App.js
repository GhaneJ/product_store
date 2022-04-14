import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route index ="/" element={<Home />} />
        <Route exact path="products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
