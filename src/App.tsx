import Home from './pages/Home';
import Navbar from './components/FloatingNavbar';
import { CountryProvider } from './components/CountryContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Navbar className='navbar' />
        <Home />
      </CountryProvider>
    </div>
  );
}

export default App;
