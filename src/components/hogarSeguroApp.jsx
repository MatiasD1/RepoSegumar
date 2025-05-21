import React from "react";

export const HogarSeguroApp = (props) => {
  return (
    <>
        {/*<div className="section-title">
          <h2>Seguridad Física</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div>*/}
        <div className="AppContainer">
          <div className="AppTexto" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0">
            {/*<h3 className="alarmaMonitoreadaTitulo">Seguridad Avanzada</h3>*/}
            <p className="textoApp">En SEGUMAR pensamos en todo, en tu seguridad y en tu bolsillo. Por eso creamos SEGURIDAD LOWCOST.
Adquirí un paquete de APP segumar Hogar seguro para que vos y tu familia estén conectados y seguros las 24 hs.</p>         

            <ul className="puteoApp">
              <li>Un botón de pánico.</li>
              <li>Un botón de emergencias médicas.</li>
              <li>Un botón de emergencia de incendio.</li>
              <li>Podrá chatear con nuestras operadoras.</li>
              <li>Podrá enviar una imagen del lugar donde está ocurriendo la emergencia.</li>
            </ul>
           
           

          </div>

          <div className="AppImgContainer" data-aos="fade-left">
              <h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>
            <img
              src="img/TabletSwiss.png"
              alt="Imagen"
              className="AppImg"
            />
          </div>
          
        </div>
        
         <div className="AppContainerReverse">
            <div className="AppTexto" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0">
              {/*<h3 className="alarmaMonitoreadaTitulo">Seguridad Avanzada</h3>*/}
              <p className="textoApp">A través del sistema de geolocalización podrá conocer donde esta cada uno de sus familiares. Esta herramienta es muy utilizada para conocer la ubicación de un familiar ante un evento de emergencia o ante el robo de un celular.</p>
              <p className="textoApp">Con SEGUMAR HOGAR SEGURO, podrá indicar, si lo desea, quien quiere que sea su guardián. Esta función genera notificaciones a su celular ante un evento de peligro. De esta forma tanto la central de monitoreo como su GUARDIAN, podrá conocer cual es su situación.</p>
                 <p className="textoApp">Es un servicio con un bajo costo y sin tener la necesidad de comprar equipos, tan solo con un smartphone usted y su familia podrá tener la seguridad que necesita.</p>
            </div>

            <div className="AppImgContainer" data-aos="fade-right">
              {/*<h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>*/}
              <img
                src="img/TabletSwiss.png"
                alt="Imagen"
                className="AppImg"
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
  
    </>
  );
};
