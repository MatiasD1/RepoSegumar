import React from "react";

export const SeguridadFisica = (props) => {
  return (
    <div className="containerSF">
      <div className="section-title">
        <h2>Seguridad Física</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </p>
      </div>

      <div className="seguridad-contenedor">
        <div className="seguridad-texto">
          {/*<h3 className="seguridad-titulo">Seguridad Avanzada</h3>*/}
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-parrafo">Personal capacitado</h4>
          <p className="seguridad-parrafo">Personal altamente capacitado en el manejo de situaciones tensas frente al delito.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-parrafo">Seguridad integral</h4>
          <p className="seguridad-parrafo">Combinamos la seguridad fisica junto con la electronica para darle un servicio de calidad.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-parrafo">Respaldo</h4>
          <p className="seguridad-parrafo">Respaldo de una empresa con experiencia en el mercado.</p>
          <img src="img/accept.png" className="iconoServicios" />
          <h4 className="seguridad-parrafo">Disponibilidad</h4>
          <p className="seguridad-parrafo">Supervisor 24/7 para el objetivo.</p>
        </div>

        <div className="seguridad-imagen-contenedor">
          <img
            src="img/Slide3Tablet.png"
            alt="Imagen"
            className="seguridad-imagen"
          />
        </div>
      </div>
    </div>
  );
};
