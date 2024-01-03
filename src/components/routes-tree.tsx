import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "../routes/root";
import CartPage from "../routes/cart";
import ReceiptPage from "../routes/receipt";

export default function RoutesTree() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
    </Routes>
  );
}
