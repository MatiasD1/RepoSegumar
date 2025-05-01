import React from "react";
import { useEffect } from "react";
import AOS from "aos";
export const Services = ({ data }) => {

  /* Dos useEffect indicados por IA para que el efecto se renderice al scrollear y no al cargar la pagina */
  useEffect(() => {
    AOS.init({
      duration: 1000, // Podés ajustar duración, offset, etc.
      once: true,     // Opcional: anima solo la primera vez
    });
  }, []);
  useEffect(() => {
    if (data) {
      AOS.refresh();
    }
  }, [data]);
  
  
  return (
    <div id="services" className="text-center">
      <img src="img/SSservicios.png" alt="Nuestros servicios" className="imagenTitulo" />
      <div className="container">
      {/*   <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
            Descubrí cómo podemos ayudarte. Estos son algunos de los servicios clave que ofrecemos para llevar tu proyecto al siguiente nivel.
          </p>
        </div>
      */}
        <div className="services-zigzag">
          {data
            ? data.map((item, index) => (
                <div
                  className={`service-row ${index % 2 === 0 ? "normal" : "reverse"}`}
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className="service-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="service-text">
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
              : "loading..."}
        </div>
      </div>
    </div>
  );
};
