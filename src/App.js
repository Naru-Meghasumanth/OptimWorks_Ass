import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import LoginPage from './components/LoginPage';
import VendorDashboard from './components/VendorDashboard';

function App() {
  const initialProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [sales, setSales] = useState(JSON.parse(localStorage.getItem('sales')) || []);
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);
  const [nextOrderId, setNextOrderId] = useState(orders.length > 0 ? orders[orders.length - 1].orderId + 1 : 1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

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

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
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

  const handleLogin = (userType) => {
    setIsLoggedIn(true);
    setIsVendor(userType === 'Vendor');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsVendor(false);
  };

  return (
    <div className='bg-dark app-body'>
      <Router>
        <div>
          {isLoggedIn && (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {!isVendor && (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product">Product Catalog</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/cart">Shopping Cart</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/checkout">Checkout</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/order-history">Order History</Link>
                        </li>
                      </>
                    )}
                    {isVendor && (
                      <li className="nav-item">
                        <Link className="nav-link" to="/vendordashboard">Vendor Dashboard</Link>
                      </li>
                    )}
                    <li className="nav-item">
                      <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </div>

        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/product" element={isLoggedIn ? <ProductList products={products} addToCart={addToCart} /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/cart" element={isLoggedIn ? <Cart cart={cart} removeFromCart={removeFromCart} /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/checkout" element={isLoggedIn ? <Checkout cart={cart} checkout={checkout} removeFromCart={removeFromCart} /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/order-history" element={isLoggedIn ? <OrderHistory orders={orders} /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/vendordashboard" element={isLoggedIn && isVendor ? <VendorDashboard addProduct={addProduct} sales={sales} /> : <LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;