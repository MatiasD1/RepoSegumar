import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const MonitoreoMayorista = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Inicializa AOS una sola vez y muestra el contenido cuando ya esté listo
    AOS.init({ once: true });
    const id = requestAnimationFrame(() => setReady(true)); // espera 1 frame para asegurar que AOS haya aplicado estilos
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) return null; // evita mostrar nada hasta que AOS esté listo
  
  return (
    <div>
      <div className="encabezadoContainer" id="alarmaMonitoreada">
        <h1 >Monitoreo Mayorista</h1>
        <img src="/img/monitoreoMayorista.png" className="TituloS" alt="Hombre monitoreando cámaras" />
      </div>
      <div className="containerSF">
      {/*  <div className="section-title">
          <h2>Seguridad Física</h2>
          <p>
            Protegemos lo que más te importa, confianos tu seguridad.
          </p>
        </div>
      */}
      <div className="AlarmaMonitoreadaContainer">
          <div className="AlarmaMonitoreadaCuadro glass" data-aos="zoom-in">
            <div className="icon-wrapper">
              <img src="/img/cam.png" className="iconoServiciosAM" alt="Icono de cámara de vigilancia"/>
            </div>
            <h4 className="AlarmaMonitoreadaTitulo">MONITOREO MAYORISTA 24 HS</h4>
            <p>Ofrecé a tus clientes un servicio profesional sin invertir en una central propia.
              Conectá tus alarmas a nuestra central y brindá monitoreo las 24 horas.
            </p>
          </div>

          <div className="AlarmaMonitoreadaCuadro glass" data-aos="zoom-in">
            <div className="icon-wrapper">
              <img src="/img/van.png" className="iconoServiciosAM" alt="Icono de camioneta"/>
            </div>
            <h4 className="AlarmaMonitoreadaTitulo">GESTIONÁ MÁS CLIENTES</h4>
            <p>Nosotros nos encargamos del monitoreo y la respuesta ante alertas.
              Vos podés enfocarte en instalar, vender y ampliar tu cartera de clientes.
            </p>
          </div>

          <div className="AlarmaMonitoreadaCuadro glass" data-aos="zoom-in">
            <div className="icon-wrapper">
              <img src="/img/ahorrar.png" className="iconoServiciosAM" alt="Icono de signo peso"/>
            </div>
            <h4 className="AlarmaMonitoreadaTitulo">MONITOREO CON TU MARCA</h4>
            <p>Atendemos las alarmas de tus clientes como si fuéramos tu empresa.
              Nuestros operadores se comunican en nombre de tu marca para mantener tu identidad y la relación con tus clientes.
            </p>
          </div>
        </div>

        
      </div>
        <div className="cotizarBotonContainer">
          <h4>Contactános para saber más del servicio de monitoreo</h4>
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
            CONSULTAR
          </button>
       

        </div>
        <div id="about">
            <img src="/img/SS anmac.png" alt="Autorización del Ministerio de Seguridad de Buenos Aires y ANMaC" className="anmacImg" />
       </div>
    </div>
  );
};
