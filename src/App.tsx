import Home from './pages/Home';
//import Navbar from './components/FloatingNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import FrenchHomePage from './pages/FrenchHome';
import ContactPopup from './components/ContactPopup';

function App() {
  const [isFrench, setIsFrench] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar isFrench={isFrench} setIsFrench={setIsFrench} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
        <Routes>
          <Route path='/' element={isFrench ? <FrenchHomePage /> : <Home />} />
        </Routes>
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
