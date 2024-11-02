import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookCollection from './pages/BookCollection';
import BookDetails from './pages/BookDetails';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './animations.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageBooks from './pages/admin/ManageBooks';
import ManageUsers from './pages/admin/ManageUsers';
import Statistics from './pages/admin/Statistics';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookCollection />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;
