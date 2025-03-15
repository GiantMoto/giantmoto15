import React from 'react';
import { Link } from 'react-router-dom';
import { Circle } from 'lucide-react';

export default function TechnologyPage() {
  const features = [
    "Sprzęt Diagnostyczny z dostępem do bramki SGW całej grupy FCA (Fiat, Lancia, Alfa Romeo, Abarth, Jeep, Maserati, Chrysler, Dodge, RAM i SRT)",
    "Hamownia drogowa Dyno Pro",
    "Sterownik Delphi DCM 6.2V"
  ];

  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-6 text-glow">Technologia</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Jesteśmy profesjonalistami z wieloletnim doświadczeniem oraz pasją, którzy korzystają z oryginalnego, 
          wysokiej jakości sprzętu, aby zagwarantować efekty.
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Circle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 mb-6">
            Zobacz jak nasz sprzęt pomaga nam uzyskiwać efekty
          </p>
          <Link
            to="/portfolio"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105"
          >
            Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="aspect-video">
            <img
              src="/files/Technologia2.jpg"
              alt="Technologia 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-video">
            <img
              src="/files/Technologia.jpg"
              alt="Technologia 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}