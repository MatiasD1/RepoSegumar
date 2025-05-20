import React from "react";

export const HogarSeguroApp = (props) => {
  return (
    <>
      <div className="containerSF">
        {/*<div className="section-title">
          <h2>Seguridad Física</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div>*/}
        <div className="alarmaMonitoreadaContainer">
          <div className="alarmaMonitoreadaTexto" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0">
            {/*<h3 className="alarmaMonitoreadaTitulo">Seguridad Avanzada</h3>*/}
            <h4 className="alarmaMonitoreadaTitulo">VIVÍ PROTEGIDO LAS 24HS</h4>
            <p className="alarmaMonitoreadaParrafo">Nunca más ingresaras solo a tu casa. Desde SEGUMAR estaremos cuidándote las 24 horas mediante las cámaras enlazadas a la central.</p>
            <img src="img/accept.png" className="iconoServicios" />
            <h4 className="alarmaMonitoreadaTitulo">MOVIL CON RESPUESTA INMEDIATA</h4>
            <p className="alarmaMonitoreadaParrafo">El servicio de seguridad remota 2.0 es significativamente más barato que la seguridad física pudiendo lograr de este modo abaratar el costo de expensas.</p>
            <img src="img/accept.png" className="iconoServicios" />
            <h4 className="alarmaMonitoreadaTitulo">AHORRÁ LA COMPRA DEL EQUIPO<br/>CON NUESTROS KIT EN COMODATO</h4>
            <p className="alarmaMonitoreadaParrafo">En Segumar contamos con kits de alarmas en modalidad COMODATO, para que protejas tu hogar sin necesidad de realizar una gran inversión inicial. Sólo abonás el costo de instalación y empezás a disfrutar de la tranquilidad que necesitás.
                  Nuestros kits incluyen sensores y comunicadores GPRS.</p>

          </div>

          <div className="alarmaMonitoreadaImgContainer" data-aos="fade-left">
            <h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>
            <img
              src="img/TabletSwiss.png"
              alt="Imagen"
              className="alarmaMonitoreadaImg"
            />
          </div>
          
        </div>
        
         <div className="alarmaMonitoreadaContainerReverse">
            <div className="alarmaMonitoreadaTexto" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0">
              {/*<h3 className="alarmaMonitoreadaTitulo">Seguridad Avanzada</h3>*/}
              <h4 className="alarmaMonitoreadaTitulo">VIVÍ PROTEGIDO LAS 24HS</h4>
              <p className="alarmaMonitoreadaParrafo">Nunca más ingresaras solo a tu casa. Desde SEGUMAR estaremos cuidándote las 24 horas mediante las cámaras enlazadas a la central.</p>
              <img src="img/accept.png" className="iconoServicios" />
              <h4 className="alarmaMonitoreadaTitulo">MOVIL CON RESPUESTA INMEDIATA</h4>
              <p className="alarmaMonitoreadaParrafo">El servicio de seguridad remota 2.0 es significativamente más barato que la seguridad física pudiendo lograr de este modo abaratar el costo de expensas.</p>
              <img src="img/accept.png" className="iconoServicios" />
              <h4 className="alarmaMonitoreadaTitulo">AHORRÁ LA COMPRA DEL EQUIPO<br/>CON NUESTROS KIT EN COMODATO</h4>
              <p className="alarmaMonitoreadaParrafo">En Segumar contamos con kits de alarmas en modalidad COMODATO, para que protejas tu hogar sin necesidad de realizar una gran inversión inicial. Sólo abonás el costo de instalación y empezás a disfrutar de la tranquilidad que necesitás.
                    Nuestros kits incluyen sensores y comunicadores GPRS.</p>

            </div>

            <div className="alarmaMonitoreadaImgContainer" data-aos="fade-right">
              <h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>
              <img
                src="img/TabletSwiss.png"
                alt="Imagen"
                className="alarmaMonitoreadaImg"
              />
            </div>
        </div>
        <div className="cotizarBotonContainer">
          <h4>Obtené tu presupuesto personalizado sin costo</h4>
          <a href="https://wa.me/2234554387"
              target="_blank"
              rel="noopener noreferrer"
              className="cotizarBoton">
            COTIZAR     
          </a>
        </div>
      </div> 
    </>
  );
};
