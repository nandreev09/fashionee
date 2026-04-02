import React from "react";
import { Routes, Route } from "react-router";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./Layout.jsx";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
