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
        <div className="AppContainer" id="AppHogarSeguro">
          <div className="AppTexto" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0">
            {/*<h3 className="alarmaMonitoreadaTitulo">Seguridad Avanzada</h3>*/}
            <p className="textoApp">En SEGUMAR pensamos en todo, en tu seguridad y en tu bolsillo. Por eso creamos SEGURIDAD LOWCOST.
Adquirí un paquete de APP segumar Hogar seguro para que vos y tu familia estén conectados y seguros las 24 hs.</p>         
            <ul className="punteoApp">
              <li><img src='/img/send.png' alt="" className="icono-li" /> Un botón de pánico.</li>
              <li><img src='/img/send.png' alt="" className="icono-li" /> Un botón de emergencias médicas.</li>
              <li><img src='/img/send.png' alt="" className="icono-li" /> Un botón de emergencia de incendio.</li>
              <li><img src='/img/send.png' alt="" className="icono-li" /> Podrá chatear con nuestras operadoras.</li>
              <li><img src='/img/send.png' alt="" className="icono-li" /> Podrá enviar una imagen del lugar donde está ocurriendo la emergencia.</li>
            </ul>
           
           

          </div>

          <div className="AppImgContainer" data-aos="fade-left">
              <h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>
            <img
              src="img/casa.png"
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
              <p className="textoApp">A través del sistema de geolocalización podrá conocer donde esta cada uno de sus familiares. Esta herramienta es muy utilizada para conocer la ubicación de un familiar ante un evento de emergencia o ante el robo de un celular.<br/><br/>
              Con SEGUMAR HOGAR SEGURO, podrá indicar, si lo desea, quien quiere que sea su guardián. Esta función genera notificaciones a su celular ante un evento de peligro. De esta forma tanto la central de monitoreo como su GUARDIAN, podrá conocer cual es su situación.
              </p>
            </div>

            <div className="AppImgContainer" data-aos="fade-right">
              {/*<h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>*/}
              <img
                src="img/AppHogarSeguro.png"
                alt="Imagen"
                className="AppImg"
              />
            </div>
        </div>
        <div className="cotizarBotonContainer">
          <h4>Obtené tu presupuesto personalizado sin costo</h4>
          <button
          className="cotizarBoton"
          onClick={() => {
            const url = 'https://wa.me/542236852201';

            // Llama a gtag sin pasarle la URL
            if (typeof window !== "undefined" && window.gtag_report_conversion) {
              window.gtag_report_conversion(); // No redirige si no le das un URL
            }

            // Abre WhatsApp en nueva pestaña
            window.open(url, '_blank');
          }}
        >
          COTIZAR
        </button>


        </div>
  
    </>
  );
};
