import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Formations from '@/pages/Formations';
import VideosLive from '@/pages/VideosLive';
import Boutique from '@/pages/Boutique';
import About from '@/pages/About';
import Contact from '@/pages/Contact.jsx';
import Login from '@/pages/Login.jsx';
import Register from '@/pages/Register.jsx';
import Dashboard from '@/pages/Dashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black tech-pattern">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/videos-live" element={<VideosLive />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;