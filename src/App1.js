import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendorDashboard from './VendorDashboard';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderHistory from './OrderHistory';
import SalesHistory from './SalesHistory';
import LoginPage from './LoginPage';

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Product" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
        <Route path="/sales-history" element={<SalesHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;
