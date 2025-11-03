// src/components/PromoBanner.js
import React, { useState, useEffect } from "react";
import "swiper/css"; // para que carguen los estilos base si los usás

const imagesDesktop = [
  { src: "img/SegumarD.png", alt: "Banner principal de Segumar" },
];

const imagesTablet = [
  { src: "img/SegumarI.jpg", alt: "Promoción Segumar en tablet" },
];

const imagesMobile = [
  { src: "img/PROMO501.png", alt: "Promo 50% Segumar" },
];

export const PromoBanner = () => {
  const [image, setImage] = useState(imagesDesktop[0]);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width > height) {
        setImage(imagesDesktop[0]);
      } else if (width <= 767) {
        setImage(imagesMobile[0]);
      } else {
        setImage(imagesTablet[0]);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div>
    <div className="carruselContainer">
      <div className="mySwiper">
        <img src={image.src} className="imgCarrusel" alt={image.alt} />
      </div>

      <div className="promo-container" style={{ opacity: 1 }}>
        <div className="promo-text">
          <p className="promo-top">PROMO</p>
          <p className="promo-porcentaje">
            <span className="big">50</span>
            <span className="percent-off">
              <span className="percent">%</span>
              <span className="off">OFF</span>
            </span>
          </p>
          <p className="instalacion">INSTALACIÓN</p>
          <p className="extra">
            + 2 MESES DE MONITOREO
            <br />
            SIN CARGO
          </p>
          <a
            href="https://wa.me/2236852201"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-button"
          >
            Solicitar Promo
          </a>
        </div>
      </div>

    </div>
    </div>
  );
};
