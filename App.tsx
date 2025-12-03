import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import PostProperty from './pages/PostProperty';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/post-property" element={<PostProperty />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;