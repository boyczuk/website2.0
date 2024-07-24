import Home from './pages/Home';
import Navbar from './components/FloatingNavbar';
import { CountryProvider } from './components/CountryContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import PorkKatsudon from './pages/recipes/PorkKatsudon';
import './App.css';
import BananaRoti from './pages/recipes/BananaRoti';

function App() {
  return (
    <div className="App">
      <Router>
        <CountryProvider>
          <Navbar className='navbar'/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/porkkatsudon' element={<PorkKatsudon />} />
            <Route path='/bananaroti' element={<BananaRoti />} />
          </Routes>

        </CountryProvider>
      </Router>
    </div>
  );
}

export default App;
