import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  )
}

