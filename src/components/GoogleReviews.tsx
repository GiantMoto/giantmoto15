import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Review {
  author: string;
  content: string;
}

const reviews: Review[] = [
  {
    author: "Wojciech Wicherek",
    content: "Bardzo polecam. Kontakt, krótki termin, solidność to cechy Pana Tomasza. Po usunięciu usterki Citroen C4 złapał oddech. Naprawdę warto skorzystać z jego usług."
  },
  {
    author: "Krzysztof Kacała",
    content: "Super firma pan Tomasz bardzo miły człowiek wykazujący duże zainteresowanie twoim problemem bardzo dobry kontakt telefoniczny w trakcie naprawy, wszystko fachowo szybko i cenowo ok. Szczerze polecam."
  },
  {
    author: "Maniek Maniek",
    content: "Mega dobra robota, u mnie wyprogramowanie Adblue. Dobrze i Szybko wykonana robota i ceny adekwatne do robocizny. Polecam"
  },
  {
    author: "Michał R",
    content: "Z całego serca polecam tego Pana robi bardzo ciekawe rzeczy z samochodem audi Q5 dl501 po strojeniu skrzyni auto nie do poznania punkty zmiany biegów plus ciśnienie i czasy robią robotę polecam i na pewno wrócę jeszcze do tego Pana i polecam wszystkim za rozsądne pieniądze."
  },
  {
    author: "Tomasz Paczkowski",
    content: "Polecam 100% Firmę Giant Motorsport Chiptuning, pełen Profesjonalizm! Robiłem 2 auta VW T5 i BMW E60 i jestem bardzo zadowolony auta dostały nowe życie🙃. Pozdrawiam."
  },
  {
    author: "Michał Świątek",
    content: "Gorąco polecam. Auto po modyfikacji znów sprawia radość jak zaraz po zakupie. Moc w górę, spalanie w dół, zabieg bez obsuwy czasowej, cena zgodna z ustaleniami. Nie mam nic do zarzucenia 🙂"
  },
  {
    author: "Paweł Kwiatkowski",
    content: "Profesjonalne podejście do klienta. Fachowa obsługa. Polecam z całego serca"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

export default function GoogleReviews() {
  return (
    <div className="bg-[#0A0A0A] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 text-glow uppercase tracking-wide">
          Zobacz zdanie naszych klientów
        </h2>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-4xl mx-auto">
          Zmodernizowaliśmy już setki samochodów, z resztą nie musisz nam wierzyć na słowo co do naszych usług - zobacz co piszą nasi klienci!
        </p>
        
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-3xl font-bold text-white uppercase tracking-wide">~100 opinii</div>
          <Star className="w-8 h-8 text-red-600" fill="currentColor" />
          <div className="text-3xl font-bold text-white uppercase tracking-wide">Ocena 5,0</div>
        </div>
        
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#111111] p-6 rounded-lg border border-red-600/20 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <GoogleIcon />
                      <span className="text-white font-semibold uppercase tracking-wide">{review.author}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-red-600" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400">{review.content}</p>
                </div>
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

        <div className="text-center space-y-4">
          <p className="text-xl text-gray-300">To coś, co sprawia, że można nam zaufać i powierzyć modernizację swojego silnika!</p>
          <Link 
            to="/kontakt" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105 uppercase tracking-wide"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </div>
  );
}