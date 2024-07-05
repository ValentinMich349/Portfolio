import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
