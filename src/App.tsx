import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import TechnologyPage from './pages/TechnologyPage';
import BlogPage from './pages/BlogPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/uslugi" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/technologia" element={<TechnologyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/regulamin" element={<TermsPage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPage />} />
          <Route path="/polityka-cookies" element={<CookiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;