import React from "react";

export const AlarmaMonitoreada = (props) => {
  return (
    <div>
      <div className="encabezadoContainer" id="alarmaMonitoreada">
        <h1>Alarma Monitoreada</h1>
        <img src="img/AlarmaMonitoreadaS.png" className="TituloS" />
      </div>
      <div className="containerSF">
      {/*  <div className="section-title">
          <h2>Seguridad Física</h2>
          <p>
            Protegemos lo que más te importa, confianos tu seguridad.
          </p>
        </div>
      */}
        <div className="seguridadFisicaContainer">
          <div className="seguridadFisicaCuadro">
            <img src="img/accept.png" className="iconoServicios" />
            <h4>VIVÍ PROTEGIDO LAS 24HS</h4>
            <p>Nunca más ingresaras solo a tu casa. Desde SEGUMAR estaremos cuidándote las 24 horas mediante las cámaras enlazadas a la central.</p>
          
          </div>
          <div className="seguridadFisicaCuadro">
            <img src="img/accept.png" className="iconoServicios" />
              <h4>MOVIL CON RESPUESTA INMEDIATA</h4>
              <p>El servicio de seguridad remota 2.0 es significativamente más barato que la seguridad física pudiendo lograr de este modo abaratar el costo de expensas.</p>
              
          </div>
          <div className="seguridadFisicaCuadro">
            <img src="img/accept.png" className="iconoServicios" />
              <h4>AHORRÁ LA COMPRA DEL EQUIPO CON NUESTROS KIT EN COMODATO</h4>
              <p>En Segumar contamos con kits de alarmas en modalidad COMODATO, para que protejas tu hogar sin necesidad de realizar una gran inversión inicial. Sólo abonás el costo de instalación y empezás a disfrutar de la tranquilidad que necesitás. Nuestros kits incluyen sensores y comunicadores GPRS.</p>
            
          </div>
         
        </div>
        
      </div>
    </div>
  );
};
