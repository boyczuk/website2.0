import JackIn from './pages/JackIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<JackIn />} />
        </Routes>
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
