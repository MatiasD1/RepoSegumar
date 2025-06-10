import React from "react";

export const SeguridadFisica = (props) => {
  return (
    <div>
      <div className="encabezadoContainer" id="seguridadFisica">
        <h1 className="encabezadoSF">Seguridad Física</h1>
        <img src="/img/SeguridadFisica.png" className="TituloS" />
      </div>
      
      <div className="containerSF" >
      {/*  <div className="section-title">
          <h2>Seguridad Física</h2>
          <p>
            Protegemos lo que más te importa, confianos tu seguridad.
          </p>
        </div>
      */}
        <div className="seguridadFisicaContainer">
          <div className="seguridadFisicaCuadro" data-aos="zoom-in" data-aos-duration="500">
            <img src="/img/personal.png" className="iconoServicios" />
            <h4>Personal capacitado</h4>
            <p>Personal altamente capacitado en el manejo de situaciones tensas frente al delito.</p>
          
          </div>
          <div className="seguridadFisicaCuadro" data-aos="zoom-in" data-aos-duration="500">
            <img src="/img/lock.png" className="iconoServicios" />
              <h4>Seguridad integral</h4>
              <p>Combinamos la seguridad fisica junto con la electronica para darle un servicio de calidad.</p>
              
          </div>
          <div className="seguridadFisicaCuadro" data-aos="zoom-in" data-aos-duration="500">
            <img src="/img/handshake.png" className="iconoServicios" />
              <h4>Respaldo</h4>
              <p>Respaldo de una empresa con experiencia en el mercado.</p>
            
          </div>
          <div className="seguridadFisicaCuadro" data-aos="zoom-in" data-aos-duration="500">
            <img src="/img/disp.png" className="iconoServicios" />
              <h4>Disponibilidad</h4>
              <p>Supervisor 24/7 para el objetivo.</p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
