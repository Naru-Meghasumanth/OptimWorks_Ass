import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './components/Context';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SalesHistory from './components/SalesHistory';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import App1 from './App1';
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
  console.log('Adding product to state:', product);
  setProducts([...products, product]);
};


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
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

  return (
    <div className='bg-dark app-body'>
      <AdminProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <div className="">
                <LoginPage />
              </div>
            } />
            <Route exact path="/App1" element={
              <div>
                <h2>Product Catalog</h2>
                <App1 />
              </div>
            } />
            <Route exact path="/Product" element={
              <div>
                <h2>Product Catalog</h2>
                <ProductList products={products} addToCart={addToCart} />
              </div>
            } />
            <Route path="/cart" element={
              <div>
                <h2>Shopping Cart</h2>
                <Cart cart={cart} removeFromCart={removeFromCart} />
              </div>
            } />
            <Route path="/checkout" element={
              <div>
                <h2>Checkout</h2>
                <Checkout cart={cart} checkout={checkout} />
              </div>
            } />
            <Route path="/order-history" element={
              <div>
                <h2>Order History</h2>
                <OrderHistory orders={orders} />
              </div>
            } />
            <Route path="/vendordashboard" element={
              <div>
                <h2>Vendor Dashboard</h2>
                <VendorDashboard addProduct={addProduct} />
                <h2>Sales History</h2>
                <SalesHistory sales={sales} />
              </div>
            } />
          </Routes>
        </Router>
      </AdminProvider>
    </div>
  );
}

export default App;
