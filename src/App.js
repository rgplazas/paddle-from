import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CanchasPage from './pages/CanchasPage';
import ReservasPage from './pages/ReservasPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canchas" element={<CanchasPage />} />
        <Route path="/reservas" element={<ReservasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
