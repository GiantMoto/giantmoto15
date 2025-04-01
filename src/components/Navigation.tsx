import React, { useState } from 'react';
import { Menu, X, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/o-nas', text: 'O nas' },
    { path: '/uslugi', text: 'Usługi' },
    { path: '/technologia', text: 'Technologia' },
    { path: '/portfolio', text: 'Portfolio' },
    { path: '/blog', text: 'Blog' },
    { path: '/kontakt', text: 'Kontakt' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A] border-b border-red-600/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={scrollToTop}>
            <img 
              src="https://raw.githubusercontent.com/GiantMoto/zdjecia/main/IKONA.png" 
              alt="Giant Motorsport Logo" 
              className="h-12"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                onClick={scrollToTop}
                className="text-gray-400 hover:text-red-500 transition-colors hover-underline uppercase tracking-wide text-sm"
              >
                {item.text}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100076437766391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B48510176564&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0rq72jW0kVafe8SVp3vOhmyWE1_DCeJ0M7tCo9anCEJV4MqVgNk5CjBpY_aem_fw6IJsQ9y_in8DPcTtlD_g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-t border-red-600/20">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="block py-2 text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wide text-sm"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
