import React from "react";

export const SeguridadFisica = (props) => {
  return (
    <div className="containerSF">
      {/*<div className="section-title">
        <h2>Seguridad Física</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </p>
      </div>*/}

      <div className="seguridad-contenedor">
        <div className="seguridad-texto" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
          {/*<h3 className="seguridad-titulo">Seguridad Avanzada</h3>*/}
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-titulo">Personal capacitado</h4>
          <p className="seguridad-parrafo">Personal altamente capacitado en el manejo de situaciones tensas frente al delito.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-titulo">Seguridad integral</h4>
          <p className="seguridad-parrafo">Combinamos la seguridad fisica junto con la electronica para darle un servicio de calidad.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-titulo">Respaldo</h4>
          <p className="seguridad-parrafo">Respaldo de una empresa con experiencia en el mercado.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-titulo">Disponibilidad</h4>
          <p className="seguridad-parrafo">Supervisor 24/7 para el objetivo.</p>
        </div>

        <div className="seguridad-imagen-contenedor" data-aos="fade-left">
          <img
            src="img/TabletSwiss.png"
            alt="Imagen"
            className="seguridad-imagen"
          />
        </div>
      </div>
    </div>
  );
};
