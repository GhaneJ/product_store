import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import Home from "./Components/Home"

function App() {
  return (
    <>
      <Routes>
        <Route index ="/" element={<Home />} />
        <Route exact path="products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
