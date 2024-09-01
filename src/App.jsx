import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductsDetails from "./Pages/ProductsDetails";
import CheckOut from "./Pages/CheckOut";
import PageNotFound from "./Pages/404";
import Layout from "./Layouts/Layout";

function App() {
  return (
    //<CartProvider>
    //	<ProductProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
    //	</ProductProvider>
    //</CartProvider>
  );
}

export default App;
