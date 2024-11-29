import Home from './pages/Home';
//import Navbar from './components/FloatingNavbar';
import { CountryProvider } from './components/CountryContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Recipes from './pages/Recipes';
import PorkKatsudon from './pages/recipes/PorkKatsudon';
import './App.css';
import BananaRoti from './pages/recipes/BananaRoti';
import JerkChickenRice from './pages/recipes/JerkChicken';
import Japchae from './pages/recipes/Japchae';

function App() {
  return (
    <div className="App">
      <Router>
        <CountryProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/porkkatsudon' element={<PorkKatsudon />} />
            <Route path='/bananaroti' element={<BananaRoti />} />
            <Route path='/japchae' element={<Japchae />} />
            <Route path='/jerkchicken' element={<JerkChickenRice />} /> 
          </Routes>
          <Analytics />
        </CountryProvider>
      </Router>
    </div>
  );
}

export default App;
