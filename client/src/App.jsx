import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Login, Product, SignIn, UserPage } from "./screens";
import {  Nav } from "./Components";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singin" element={<SignIn />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
