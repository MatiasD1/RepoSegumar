import React from "react";

export const Services = ({ data }) => {

  return (
    <div id="services" className="text-center">
      <img src="img/SSservicios.png" alt="Nuestros servicios" className="serviciosTitulo" />
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
