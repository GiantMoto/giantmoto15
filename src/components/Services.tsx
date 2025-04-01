import React from 'react';
import { Wine as Engine, Gauge, Cpu, Wrench } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group relative overflow-hidden p-6 border border-red-600/20 rounded-lg hover:bg-red-950/20 transition-all duration-300">
    <div className="relative z-10">
      <Icon className="w-12 h-12 text-red-600 mb-4 group-hover:text-red-400 transition-colors" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: Engine,
      title: "Modyfikacja ECU",
      description: "Spersonalizowane rozwiązania zarządzania silnikiem dostosowane do Twoich potrzeb."
    },
    {
      icon: Gauge,
      title: "Tuning Wydajności",
      description: "Precyzyjne dostrojenie parametrów dla maksymalnej mocy i efektywności."
    },
    {
      icon: Cpu,
      title: "Własne Mapy",
      description: "Indywidualne mapy dostosowane do specyfikacji Twojego pojazdu."
    },
    {
      icon: Wrench,
      title: "Diagnostyka",
      description: "Zaawansowana diagnostyka z wykorzystaniem najnowocześniejszego sprzętu."
    }
  ];

  return (
    <div className="bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 text-glow uppercase tracking-wide">
          Nasze Usługi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}