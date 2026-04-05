import React, { useState, useEffect } from "react";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let selectedImage;

      if (width <= 767) {
        selectedImage = imagesMobile[0];
      } else if (width <= 1024) {
        selectedImage = imagesTablet[0];
      } else {
        selectedImage = imagesDesktop[0];
      }

      setLoaded(false); // ocultar mientras carga
      setImage(selectedImage);
    };

    updateImage();

  let timeout;
  const handleResize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(updateImage, 200);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="carruselContainer">
      <div className="mySwiper">

        {!loaded && <div className="banner-loader"></div>}

        <img
          src={image.src}
          className="imgCarrusel"
          alt={image.alt}
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
        />

        {loaded && (
          <div className="promo-container">
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
        )}

      </div>
    </div>
  );
};