import {Routes,Route} from 'react-router';

import './App.css';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}
