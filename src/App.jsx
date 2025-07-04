import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './pages/Home/HomePage.jsx';
import OrdersPage from './pages/Orders/OrdersPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import './App.css'
import ResetButton from './components/ResetButton.jsx';


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
    <div className='relative'>
      <ResetButton loadCart={loadCart} />
      <Routes>
      <Route path="/" element={<HomePage loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage  cart={cart} loadCart={loadCart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      </Routes>
    </div>
    
  );
}
