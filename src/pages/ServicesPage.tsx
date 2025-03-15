import React from 'react';
import { Cpu, Settings2, Activity, Gauge } from 'lucide-react';

const ServiceCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-[#111111] p-6 rounded-lg border border-red-600/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      icon: Cpu,
      text: "Modyfikacja ECU"
    },
    {
      icon: Settings2,
      text: "Tuning Wydajności"
    },
    {
      icon: Activity,
      text: "Własne Mapy"
    },
    {
      icon: Gauge,
      text: "Diagnostyka"
    }
  ];

  const detailedServices = [
    {
      title: "Wyprogramowanie układu SCR (AdBlue)",
      description: "Usunięcie systemu selektywnej redukcji katalitycznej, co eliminuje problemy związane z niewłaściwym działaniem tego układu."
    },
    {
      title: "Usunięcie DPF",
      description: "Fizyczne i programowe usunięcie filtra cząstek stałych, co poprawia dynamikę silnika oraz redukuje koszty związane z ewentualnymi awariami."
    },
    {
      title: "Profesjonalna modyfikacja ECU",
      description: "Zmiana parametrów silnika (sterownik Delphi DCM 7.1A), która zapewnia lepszą moc, moment obrotowy oraz płynność pracy silnika."
    },
    {
      title: "Modyfikacja skrzyń biegów automatycznych",
      description: "Proces ulepszania oryginalnej konstrukcji skrzyni biegów w samochodzie, który poprawia jej wydajność i trwałość."
    },
    {
      title: "Zwiększenie ciśnienia oleju (Grupa VAG)",
      description: "Modyfikacja układu hydraulicznego skrzyni biegów, która poprawia reakcję na zmiany biegów, zwiększa trwałość elementów hydraulicznych oraz wydajność pracy skrzyni, szczególnie w pojazdach o większej mocy."
    }
  ];

  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="relative w-full h-[300px] mb-12">
        <img 
          src="/files/BGGiantMotorSport.png"
          alt="Giant Motorsport Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12 text-glow">
          Nasze usługi
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {services.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-red-500"
            >
              <Icon className="w-12 h-12" />
              <span className="text-lg font-semibold">{text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {detailedServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <p className="text-gray-400 text-center text-lg max-w-4xl mx-auto">
          Usługi realizowane są przez specjalistów firmy Giant Motorsport Chiptuning, którzy posiadają wieloletnie doświadczenie w zakresie modyfikacji i optymalizacji jednostek napędowych.
        </p>
      </div>
    </div>
  );
}