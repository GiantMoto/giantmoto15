import React from 'react';
import { Link } from 'react-router-dom';
import { Star, PenTool as Tool, Users, Trophy } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-6 text-glow uppercase tracking-wide">O nas</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Tool className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-gray-400">Lat doświadczenia</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">1000+</p>
                <p className="text-gray-400">Zadowolonych klientów</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-gray-400">Satysfakcji</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                Giant Motorsport to profesjonalne centrum tuningu samochodowego z wieloletnim doświadczeniem w branży. 
                Specjalizujemy się w optymalizacji oprogramowania silników i zwiększaniu osiągów pojazdów, oferując 
                najwyższej jakości usługi chiptuningowe.
              </p>
              
              <p>
                Nasza firma wyróżnia się indywidualnym podejściem do każdego klienta i jego pojazdu. Nie korzystamy 
                z gotowych rozwiązań - każda modyfikacja jest precyzyjnie dostosowana do specyfiki danego samochodu 
                i oczekiwań jego właściciela.
              </p>

              <p>
                Dysponujemy najnowocześniejszym sprzętem diagnostycznym i profesjonalnym oprogramowaniem, co pozwala 
                nam na bezpieczne i efektywne przeprowadzanie modyfikacji. Nasz zespół to doświadczeni specjaliści, 
                którzy nieustannie podnoszą swoje kwalifikacje.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Link 
            to="/uslugi" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
          >
            Zobacz Nasze Usługi
          </Link>
          <Link 
            to="/portfolio" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
          >
            Nasze Portfolio
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
  );
}