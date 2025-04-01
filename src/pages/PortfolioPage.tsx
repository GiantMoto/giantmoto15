import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import GoogleMap from '../components/GoogleMap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ModifiedCar = ({ imagePath, caption, onClick }: { 
  imagePath: string; 
  caption: string;
  onClick: () => void;
}) => (
  <div 
    className="bg-[#111111] rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-[16/9] overflow-hidden">
      <img
        src={imagePath}
        alt={caption}
        className="w-full h-full object-contain bg-black"
      />
    </div>
    <div className="p-4">
      <p className="text-gray-300 text-center">{caption}</p>
    </div>
  </div>
);

const ResultFrame = ({ carImage, graphImage, caption }: {
  carImage: string;
  graphImage: string;
  caption: string;
}) => (
  <div className="bg-[#111111] p-6 rounded-lg">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <img src={carImage} alt="Car" className="w-full h-48 object-cover rounded" />
      <img src={graphImage} alt="Performance Graph" className="w-full h-48 object-cover rounded" />
    </div>
    <p className="text-gray-300 text-center">{caption}</p>
  </div>
);

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const results = [
    {
      carImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/AudiQ5Quatro.jpg",
      graphImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/AudiQ5QuatroPomiary.jpg",
      caption: "Audi Q5 Quattro +24KM(14%) +30NM(8%)"
    },
    {
      carImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/BMW.jpg",
      graphImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/BMWPomiary.jpg",
      caption: "BMW 520d E60 +47KM(30%) +94NM(30%)"
    },
    {
      carImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/KiaSportage.jpg",
      graphImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/KiaSportagePomiary.jpg",
      caption: "Kia Sportage +40KM (38%) +83NM (33%)"
    },
    {
      carImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/Volkswagen.jpg",
      graphImage: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/VolkswagenPomiary.jpg",
      caption: "Volkswagen T6 2.0BITDI +51KM (27%) +34NM(7%)"
    }
  ];

  const modifiedCars = [
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/FordFiesta1.5TDCI.jpg",
      caption: "Ford Fiesta 1.5Tdci 2016r - DPF OFF"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/CitroenJumper2.0.jpg",
      caption: "Citroen Jumper 2.0 HDI 163KM 2019r - SCR Adblue OFF"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/OpelCombo1.3.jpg",
      caption: "Opel Combo 1.3 CDTi (Magneti Marelli MJD 8F3.D4) - EGR OFF"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/AudiQ5.jpg",
      caption: "Audi Q5 2.0 TDI - modyfikacja skrzyni DSG"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/PeugeotPartner1.5.png",
      caption: "Peugeot Partner 1.5 Blue HDI 2020r. - ADBLUE OFF"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/SeatLeon2.0TDI.png",
      caption: "Seat Leon 2.0 TDI Cupa 184km - DPR, EGR OFF"
    },
    {
      image: "https://raw.githubusercontent.com/GiantMoto/zdjecia/main/FiatDucato2.3.png",
      caption: "Fiat Ducato 2.3 140 - ADBLUE OFF"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12 text-glow uppercase tracking-wide">Portfolio</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Poznaj nasze realizacje i przekonaj się o skuteczności naszych usług. Każdy projekt to historia sukcesu i zadowolenia klienta.
        </p>

        <h2 className="text-3xl font-bold text-center text-white mb-6">Nasza skuteczność</h2>
        <p className="text-gray-400 text-center mb-12">
          Między innymi takie efekty udało nam się osiągnąć!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {results.map((result, index) => (
            <ResultFrame key={index} {...result} />
          ))}
        </div>

        <p className="text-xl text-center text-white mb-8">
          Wprowadziliśmy jeszcze takie modyfikacje, oraz wiele innych
        </p>
        
        <div className="relative mb-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-red-600 !opacity-50',
              bulletActiveClass: '!bg-red-600 !opacity-100',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {modifiedCars.map((car, index) => (
              <SwiperSlide key={index}>
                <ModifiedCar
                  imagePath={car.image}
                  caption={car.caption}
                  onClick={() => setSelectedImage(car.image)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev !w-12 !h-12 !bg-red-600/80 rounded-full !text-white hover:!bg-red-700 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next !w-12 !h-12 !bg-red-600/80 rounded-full !text-white hover:!bg-red-700 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
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
      </div>
    </div>
  );
}