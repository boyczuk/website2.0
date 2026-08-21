import JackIn from './pages/JackIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import LanguageToggle from './components/LanguageToggle';
import { useState } from 'react';
import FrenchHomePage from './pages/FrenchHome';

function App() {
  const [isFrench, setIsFrench] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={isFrench ? <FrenchHomePage /> : <JackIn setIsFrench={setIsFrench} />} />
        </Routes>
        {isFrench && <LanguageToggle isFrench={isFrench} setIsFrench={setIsFrench} />}
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
