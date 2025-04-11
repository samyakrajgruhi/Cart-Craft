import {Routes,Route} from 'react-router';

import './App.css';
import HomePage from './pages/HomePage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
