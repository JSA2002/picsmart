import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error';
import Contact from './components/Contact';
import Trending from './components/Trending';
import Generate from './components/Generate';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/generate" element={<Generate/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
