import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Gauge, Wrench, Zap, Fuel, MapPinned } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GoogleReviews from '../components/GoogleReviews';
import GoogleMap from '../components/GoogleMap';

const ContactButton = ({ href, icon: Icon, children }: { 
  href: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="text-gray-400 hover:text-red-500 transition-colors inline-flex items-center space-x-2"
  >
    <Icon className="text-red-600 w-5 h-5" />
    <span>{children}</span>
  </a>
);

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Hero />
      <Services />
      
      <div className="bg-[#0A0A0A] py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl text-gray-300 mb-6">Zobacz więcej, skontaktuj się</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/o-nas" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
            >
              O nas
            </Link>
            <Link 
              to="/uslugi" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
            >
              Więcej o usługach
            </Link>
            <Link 
              to="/kontakt" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4 text-glow uppercase tracking-wide">
            Aktualności
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Nasz najnowszy post z
            <Link 
              to="/blog" 
              className="ml-2 inline-block bg-red-600 text-white px-4 py-1 rounded-sm hover:bg-red-700 transition-all duration-300 uppercase tracking-wide"
            >
              /blog
            </Link>
          </p>
          
          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Oszczędzaj na Paliwie z Profesjonalnym Chiptuningiem!
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="https://raw.githubusercontent.com/GiantMoto/zdjecia/main/PALIWO.png"
                alt="Fuel Economy"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage("https://raw.githubusercontent.com/GiantMoto/zdjecia/main/PALIWO.png")}
              />
              <img
                src="https://raw.githubusercontent.com/GiantMoto/zdjecia/main/OpelAstraPomiary.jpg"
                alt="Performance Graph"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage("https://raw.githubusercontent.com/GiantMoto/zdjecia/main/OpelAstraPomiary.jpg")}
              />
            </div>

            <div className="text-gray-300 space-y-6">
              <p>
W czasach rosnących cen paliw, każdy kierowca szuka sposobów na zmniejszenie kosztów eksploatacji swojego pojazdu. Czy wiesz, że profesjonalny chiptuning nie tylko zwiększa moc silnika, ale może też znacząco obniżyć zużycie paliwa? Jak widać na wykresie, w przypadku Opla Astry udało nam się zwiększyć moc z 90 KM do 105 KM oraz moment obrotowy z 200 Nm do 238 Nm. Co najważniejsze, silnik o większej mocy i momencie obrotowym może pracować w bardziej optymalnym zakresie obrotów, co przekłada się na mniejsze zużycie paliwa. Przy tej samej prędkości, silnik nie musi pracować na wysokich obrotach, dzięki czemu zużywa mniej paliwa.
              </p>

              <div className="space-y-2">
                <h4 className="text-white font-semibold">Co zyskasz dzięki naszej modyfikacji?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Zap className="text-red-600 w-5 h-5" />
                    <span>Redukcja zużycia paliwa nawet o 10-15% przy normalnej jeździe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Gauge className="text-red-600 w-5 h-5" />
                    <span>Optymalizacja krzywej momentu obrotowego dla lepszej efektywności</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Fuel className="text-red-600 w-5 h-5" />
                    <span>Płynniejsza praca silnika i lepsza responsywność</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Wrench className="text-red-600 w-5 h-5" />
                    <span>Zwiększona przyjemność z jazdy przy niższych kosztach eksploatacji</span>
                  </li>
                </ul>
              </div>

              <p>
                Nie używamy gotowych map – każde strojenie to precyzyjna i indywidualna modyfikacja! 
                Przed i po tuningu przeprowadzamy pełną diagnostykę komputerową, aby zapewnić bezpieczeństwo 
                i maksymalną efektywność zmian.
              </p>

              <div className="bg-[#0A0A0A] p-6 rounded-lg space-y-4">
                <h4 className="text-white font-semibold">Zadbaj o moc i bezpieczeństwo swojego auta!</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPinned className="text-red-600 w-5 h-5" />
                    <span>Zapolice, ul. Parkowa 10B, 98-161</span>
                  </div>
                  <ContactButton href="tel:510176564" icon={Phone}>
                    510 176 564
                  </ContactButton>
                  <ContactButton href="mailto:giantmoto@o2.pl" icon={Mail}>
                    giantmoto@o2.pl
                  </ContactButton>
                  <ContactButton 
                    href="https://www.facebook.com/profile.php?id=100076437766391" 
                    icon={Facebook}
                  >
                    Znajdź nas na Facebooku
                  </ContactButton>
                </div>
              </div>

              <div className="text-center text-xl font-bold text-white">
                Giant Motorsport – Moc, Jakość i Bezpieczeństwo Bez Kompromisów!
              </div>
            </div>
          </div>
        </div>
      </div>

      <GoogleReviews />
      <GoogleMap />

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage} 
              alt="Powiększone zdjęcie" 
              className="w-full h-auto"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}