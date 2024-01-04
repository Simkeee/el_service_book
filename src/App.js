// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import ServiceDashboard from './components/dashboard/ServiceDashboard';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AuthProvider } from './components/auth/auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-login" element={<UserDashboard />} /> 
            <Route path="/service-login" element={<ServiceDashboard />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
