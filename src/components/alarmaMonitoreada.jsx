import React, { useEffect, useState } from "react";
import { Contact } from "./contact";
import AOS from "aos";
import "aos/dist/aos.css";

export const AlarmaMonitoreada = (props) => {

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
        <h1 >Alarma Monitoreada</h1>
        <img src="/img/casa.png" className="TituloS" alt="Casa moderna de noche" />
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
            <h4 className="AlarmaMonitoreadaTitulo">VIVÍ PROTEGIDO LAS 24 HS</h4>
            <p>Disfrutá de tu hogar con tranquilidad. Nuestro sistema monitoreado te cuida en todo momento, estés o no estés.</p>
          </div>

          <div className="AlarmaMonitoreadaCuadro glass" data-aos="zoom-in">
            <div className="icon-wrapper">
              <img src="/img/van.png" className="iconoServiciosAM" alt="Icono de camioneta"/>
            </div>
            <h4 className="AlarmaMonitoreadaTitulo">MÓVIL CON RESPUESTA INMEDIATA</h4>
            <p>Ante cualquier alerta, nuestro móvil acude al instante para protegerte y actuar rápido frente a cualquier emergencia.</p>
          </div>

          <div className="AlarmaMonitoreadaCuadro glass large" data-aos="zoom-in">
            <div className="icon-wrapper">
              <img src="/img/ahorrar.png" className="iconoServiciosAM" alt="Icono de signo peso"/>
            </div>
            <h4 className="AlarmaMonitoreadaTitulo">AHORRÁ CON NUESTROS KITS EN COMODATO</h4>
            <p>Protegé tu hogar sin gran inversión inicial. Sólo abonás la instalación y disfrutás de tranquilidad con sensores y comunicadores GPRS.</p>
          </div>
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
    </div>
  );
};
