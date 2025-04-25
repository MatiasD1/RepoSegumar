// Carrusel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from "../"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Módulos necesarios
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carrusel = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      navigation
      //pagination={{ clickable: true }}
      loop={true}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 4000, // tiempo en milisegundos (4 segundos)
        disableOnInteraction: false, // sigue aunque el usuario interactúe
      }}
      
    >
      <SwiperSlide>
        <img src="img/radio.png" className="imgCarrusel" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/familia.png" className="imgCarrusel" alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/slide3.jpg" className="imgCarrusel" alt="slide3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel;
