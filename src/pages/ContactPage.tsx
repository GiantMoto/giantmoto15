import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-6 text-glow">Kontakt</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji o naszych usługach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
            <h2 className="text-2xl font-bold text-white mb-6">Dane kontaktowe</h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <Mail className="text-red-600 w-6 h-6" />
                <a href="mailto:giantmoto@o2.pl" className="text-gray-400 hover:text-red-500 transition-colors">
                  giantmoto@o2.pl
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-red-600 w-6 h-6" />
                <a href="tel:510176564" className="text-gray-400 hover:text-red-500 transition-colors">
                  510 176 564
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="text-red-600 w-6 h-6" />
                <span className="text-gray-400">
                  Parkowa 10b 98-161 Zapolice
                </span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100076437766391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center space-x-4"
                >
                  <Facebook className="w-6 h-6" />
                  <span>Znajdź nas na Facebooku</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
            <h2 className="text-2xl font-bold text-white mb-6">Godziny otwarcia</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-gray-400">Poniedziałek - Piątek</span>
                <span className="text-white">10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sobota</span>
                <span className="text-red-500">Zamknięte</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Niedziela</span>
                <span className="text-red-500">Zamknięte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}