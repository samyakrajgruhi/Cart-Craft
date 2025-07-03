import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './pages/Home/HomePage.jsx';
import OrdersPage from './pages/Orders/OrdersPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';



export default function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    let response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(()=>{
    loadCart();
  },[]);

  return (
    <Routes>
      <Route path="/" element={<HomePage loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
    </Routes>
  );
}
