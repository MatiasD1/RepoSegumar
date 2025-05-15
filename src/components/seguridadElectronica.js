import React from "react";

export const SeguridadElectronica = (props) => {
  return (
    <div className="containerSF">
      <div className="section-title">
        <h2>Alarma Monitoreada</h2>
        <p>
          Protegemos lo que más te importa, confianos tu seguridad.
        </p>
      </div>

      <div className="seguridadElc-contenedor">
        <div className="seguridadElc-cuadro">
           <img src="img/accept.png" className="iconoServicios" />
           <h4>VIVÍ PROTEGIDO LAS 24HS</h4>
           <p>Nunca más ingresaras solo a tu casa. Desde SEGUMAR estaremos cuidándote las 24 horas mediante las cámaras enlazadas a la central.</p>
        </div>
        <div className="seguridadElc-cuadro">
           <img src="img/accept.png" className="iconoServicios" />
            <h4>MOVIL CON RESPUESTA INMEDIATA</h4>
            <p>El servicio de seguridad remota 2.0 es significativamente más barato que la seguridad física pudiendo lograr de este modo abaratar el costo de expensas.</p>
        </div>
        <div className="seguridadElc-cuadro">
          <img src="img/accept.png" className="iconoServicios" />
            <h4>AHORRÁ LA COMPRA DEL EQUIPO CON NUESTROS KIT EN COMODATO</h4>
            <p>En Segumar contamos con kits de alarmas en modalidad COMODATO, para que protejas tu hogar sin necesidad de realizar una gran inversión inicial. Sólo abonás el costo de instalación y empezás a disfrutar de la tranquilidad que necesitás.
                Nuestros kits incluyen sensores y comunicadores GPRS.
            </p>
        </div>
        
      </div>
      <div className="seguridadElcBotonContainer">
        <h4>Obtené tu presupuesto personalizado sin costo</h4>
        <a href="https://wa.me/2234554387"
            target="_blank"
            rel="noopener noreferrer"
            className="seguridadElcBoton">
          COTIZAR     
        </a>
      </div>
    </div>
  );
};
