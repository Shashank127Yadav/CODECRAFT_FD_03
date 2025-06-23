import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import TrackOrder from "./pages/TrackOrder";
import ContactSupport from "./pages/ContactSupport";
import { CartProvider } from "./context/CartContext";
import AdminPanel from "./pages/Admin";
function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="bg-gray-800 text-white p-4 flex gap-6">
          <Link to="/" className="font-bold">
            MyStore
          </Link>
          <Link to="/cart">Cart</Link>
          <Link to="/track">Track Order</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/support">Support</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/support" element={<ContactSupport />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
