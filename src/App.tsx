import Home from './pages/Home';
import Navbar from './components/FloatingNavbar';
import { CountryProvider } from './components/CountryContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CountryProvider>
          <Navbar className='navbar' setIsMapOpen={function (isOpen: boolean): void {
            throw new Error('Function not implemented.');
          } } />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
          </Routes>

        </CountryProvider>
      </Router>
    </div>
  );
}

export default App;
