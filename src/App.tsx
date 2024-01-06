import Home from './pages/Home';
import Navbar from './components/FloatingNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className='navbar' />
      <Home />
    </div>
  );
}

export default App;
