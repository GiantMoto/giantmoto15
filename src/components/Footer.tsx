import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 border-t border-red-600/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" onClick={scrollToTop}>
              <img 
                src="/LogoGiantMotorsport.png" 
                alt="Giant Motorsport Logo" 
                className="h-12 mb-4"
              />
            </Link>
            <h3 className="text-white font-bold text-xl mb-2">Giant Motorsport</h3>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/uslugi" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/technologia" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Technologia
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/kontakt" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Informacje</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/regulamin" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link to="/polityka-cookies" onClick={scrollToTop} className="text-gray-400 hover:text-red-500 transition-colors">
                  Polityka Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Skontaktuj się</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="text-red-600 w-5 h-5" />
                <a href="mailto:giantmoto@o2.pl" className="text-gray-400 hover:text-red-500 transition-colors">
                  giantmoto@o2.pl
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-red-600 w-5 h-5" />
                <a href="tel:510176564" className="text-gray-400 hover:text-red-500 transition-colors">
                  510 176 564
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-red-600 w-5 h-5" />
                <span className="text-gray-400">
                  Parkowa 10b 98-161 Zapolice
                </span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100076437766391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Znajdź nas na Facebooku</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-600/20 text-center text-gray-400">
          Giant Motorsport © 2025 Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}