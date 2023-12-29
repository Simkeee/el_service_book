// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Dodajte druge rute prema potrebi */}
          <Route path="/not-found" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
