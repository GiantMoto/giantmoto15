import React from 'react';
import { Car, Cpu, Settings2, Gauge, Wine as Engine, Wrench, Activity, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-[#0A0A0A] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619253790860-4a040e39fe62?auto=format&fit=crop&q=80&w=2000"
          alt="Performance Car"
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="flex flex-col space-y-4 text-5xl md:text-7xl font-bold text-white mb-12 uppercase tracking-wide">
            <span>Nowoczesne</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Rozwiązania</span>
            <span>Chiptuningowe</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Cpu, text: "Modyfikacja ECU" },
              { icon: Settings2, text: "Tuning Wydajności" },
              { icon: Activity, text: "Własne Mapy" },
              { icon: Gauge, text: "Diagnostyka" }
            ].map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-red-500"
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
          
          <Link 
            to="/uslugi" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] mb-12 transform hover:scale-105 uppercase tracking-wide"
          >
            Zobacz Nasze Usługi
          </Link>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 text-glow uppercase tracking-wide">Kim jesteśmy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Giant Motorsport to profesjonalne centrum tuningu samochodowego, specjalizujące się w optymalizacji 
              oprogramowania silników i zwiększaniu osiągów pojazdów. Nasze doświadczenie, połączone z najnowocześniejszą 
              technologią, pozwala nam dostarczać najwyższej jakości usługi chiptuningowe, dostosowane do 
              indywidualnych potrzeb każdego klienta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}