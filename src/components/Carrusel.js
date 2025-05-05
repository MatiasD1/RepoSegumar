import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imagesDesktop = [
  "img/Slide1Escritorio.png",
  "img/Slide2Escritorio.png",
  "img/Slide3Escritorio.png",
];

const imagesTablet = [
  "img/Slide1Tablet.png",
  "img/Slide2Tablet.png",
  "img/Slide3Tablet.png",
];

const imagesMobile = [
  "img/Slide1Movil.png",
  "img/Slide2Movil.png",
  "img/Slide3Movil.png",
];

const Carrusel = () => {
  const [images, setImages] = useState(imagesDesktop);

  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
    
      if (width > height) {
        setImages(imagesDesktop); // Horizontal = escritorio
      } else if (width <= 767) {
        setImages(imagesMobile);
      } else {
        setImages(imagesTablet);
      }
      

    };
    
    updateImages(); // carga inicial
    window.addEventListener('resize', updateImages); // detecta cambios

    return () => window.removeEventListener('resize', updateImages);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      navigation
      loop={true}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} className="imgCarrusel" alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
