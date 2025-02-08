import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Link, Routes } from 'react-router-dom';
import SalesHistory from './components/SalesHistory';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import VendorDashboard from './components/VendorDashboard';



function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [sales, setSales] = useState(JSON.parse(localStorage.getItem('sales')) || []);
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);
  const [nextOrderId, setNextOrderId] = useState(orders.length > 0 ? orders[orders.length - 1].orderId + 1 : 1);
  const [isVendor, setIsVendor] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
      setCart(cart.map(item => item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (title) => {
    setCart(cart.filter(item => item.title !== title));
  };

const checkout = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const order = {
    orderId: nextOrderId,
    items: cart.map(item => ({ ...item })),
    timestamp: new Date().toLocaleString()
  };
  setOrders([...orders, order]);
  cart.forEach(item => {
    setSales([...sales, { product: item.title, quantity: item.quantity, timestamp: order.timestamp }]);
  });
  alert("Thank you for your purchase! Order ID: " + order.orderId);
  setCart([]);
  setNextOrderId(nextOrderId + 1);
};

const toggleVendorPanel = () => {
  setIsVendor(!isVendor);
};

return (
    <div className="container">
      <div className='d-flex justify-content-between'>
        <div className='text-end'>
          <h1 className=''>E-Commerce Simulation</h1>
        </div>
        {/* <button className="btn btn-secondary mt-3 ml-auto" onClick={toggleVendorPanel}>
          {isVendor ? 'Switch to Customer View' : 'Switch to Vendor View'}
        </button> */}
      </div>
      {isVendor ? (
        <div>
          <h2>Vendor Panel</h2>
          <VendorDashboard addProduct={addProduct} />
          <h2>Sales History</h2>
          <SalesHistory sales={sales} />
        </div>
      ) : (
        <div>
          <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/App1"></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Product">Product Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Shopping Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/checkout">Checkout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/order-history">Order History</Link>
        </li>
        {isVendor && (
          <li className="nav-item">
            <Link className="nav-link" to="/vendor-dashboard">Vendor Dashboard</Link>
          </li>
        )}
      </ul>
        </div>
      )}
      
    </div>
  
);
}

export default App;