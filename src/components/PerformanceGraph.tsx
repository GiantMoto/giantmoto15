import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModifiedCar = ({ imagePath, caption, onClick }: { 
  imagePath: string; 
  caption: string;
  onClick: () => void;
}) => (
  <div 
    className="bg-[#111111] rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={imagePath}
        alt={caption}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <p className="text-gray-300 text-center">{caption}</p>
    </div>
  </div>
);

export default function PerformanceGraph() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const modifiedCars = [
    {
      image: "/files/FordFiesta1.5TDCI.jpg",
      caption: "Ford Fiesta 1.5Tdci 2016r - DPF OFF"
    },
    {
      image: "/files/CitroenJumper2.0.jpg",
      caption: "Citroen Jumper 2.0 HDI 163KM 2019r - SCR Adblue OFF"
    },
    {
      image: "/files/OpelCombo1.3.jpg",
      caption: "Opel Combo 1.3 CDTi (Magneti Marelli MJD 8F3.D4) - EGR OFF"
    },
    {
      image: "/files/AudiQ5.jpg",
      caption: "Audi Q5 2.0 TDI - modyfikacja skrzyni DSG"
    },
    {
      image: "/files/PeugeotPartner1.5.png",
      caption: "Peugeot Partner 1.5 Blue HDI 2020r. - ADBLUE OFF"
    },
    {
      image: "/files/SeatLeon2.0TDI.png",
      caption: "Seat Leon 2.0 TDI Cupa 184km - DPR, EGR OFF"
    },
    {
      image: "/files/FiatDucato2.3.png",
      caption: "Fiat Ducato 2.3 140 - ADBLUE OFF"
    },
    {
      image: "/files/FordFiesta1.5TDCI.jpg",
      caption: "Ford Fiesta 1.5 TDCI 2016r. - DPF OFF"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 mb-2">Sprawdź nasze ostatnie modyfikacje</p>
          <h2 className="text-4xl font-bold text-white mb-4 text-glow">Zmodyfikowane pojazdy w Giant Motorsport</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="relative">
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
                slidesPerView: 4,
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
      </div>

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
  );
}