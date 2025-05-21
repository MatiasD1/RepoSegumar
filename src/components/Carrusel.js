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
        setImages(imagesDesktop);
      } else if (width <= 767) {
        setImages(imagesMobile);
      } else {
        setImages(imagesTablet);
      }
    };

    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  return (
    <div className="carruselContainer">
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

      {/* Formulario sobre el carrusel */}
      <div className="formularioCarrusel">
        <p><strong>Cotizá gratis tu alarma.</strong><br />
          Llamá al 2236 85-2201<br />
          O dejá tus datos, nosotros te llamamos:</p>

        <div className="formCarrusel-horizontal">
          <input
            type="text"
            className="formCarrusel-input"
            placeholder="Nombre"
          />

        <div className="formCarrusel-prefixedInput">
          <span className="formCarrusel-prefix">15 -</span>
          <input
            type="text"
            className="formCarrusel-phoneInput"
            placeholder=""
          />
        </div>


          <div className="formCarrusel-telefono">      
            <input
              type="text"
              className="formCarrusel-codigoNum"
              placeholder="Código o número"
            />
          </div>
          <button className="formCarrusel-button">Enviar</button>
        </div>

        <div className="formCarrusel-checkbox">
          <input type="checkbox" />
          <label>He leído y acepto la <a href="#">política de privacidad</a>.</label>
        </div>
      </div>

    </div>
  );
};

export default Carrusel;
