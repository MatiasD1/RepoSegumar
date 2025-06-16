import React from "react";

export const HogarSeguroApp = (props) => {
  return (
    <>
           <div className="encabezadoContainer" id="alarmaMonitoreada">
          <h1 className="AppHogarSeguroTitulo" >VIDEOVIGILANCIA<br/>INTELIGENTE</h1>
          <img src="/img/AlarmaMonitoreada2.png" className="TituloS" />
        </div>
    
        <div className="AppContainer" id="AppHogarSeguro">
          <div className="AppTexto" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
                      data-aos-duration="500"
      data-aos-delay="400"
      data-aos-offset="0">
            <h3 className="AppTitulo">Sistema de vigilancia para tu empresa o consorcio</h3>
            {/*<p className="textoApp"></p>*/}
            <ul className="punteoApp">
              <li><img src='/img/1.png' alt="" className="icono-li" />Conectamos las cámaras del lugar a nuestra Central de Monitoreo 24/7.</li>
              <li><img src='/img/2.png' alt="" className="icono-li" />Supervisamos en tiempo real todos los accesos y puntos clave del edificio o empresa.</li>
              <li><img src='/img/3.png' alt="" className="icono-li" />Verificamos cada evento sospechoso y damos aviso inmediato.</li>
              <li><img src='/img/4.png' alt="" className="icono-li" />Activamos protocolo de respuesta: enviamos móvil y/o alertamos a las fuerzas de seguridad.</li>
              <li><img src='/img/5.png' alt="" className="icono-li" />Generamos informes y registros ante incidentes o requerimientos del cliente.</li>
            </ul>
           
           

          </div>

          <div className="AppImgContainer" data-aos="fade-left">
          {/*   <h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>*/} 
            <img
              src="/img/camaraV.jpg"
              alt="Imagen"
              className="AppImg"
            />
          </div>
          
        </div>
        
         <div className="AppContainerReverse">
            <div className="AppTexto" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-offset="0">
              <h3 className="AppTitulo">¿A quién está dirigido y por qué elegirlo?</h3>
              <p className="textoApp">Este servicio está diseñado para consorcios, edificios, empresas, industrias y comercios que requieren vigilancia profesional sin la necesidad de contar con un guardia en el lugar.
                <br/>Es ideal para quienes buscan:
              </p>
              <ul className="punteoApp">
                <li><img src='/img/send.png' alt="" className="icono-li" />Reducir riesgos de intrusión, vandalismo o siniestros.</li>
                <li><img src='/img/send.png' alt="" className="icono-li" />Contar con respaldo visual ante cualquier incidente.</li>
                <li><img src='/img/send.png' alt="" className="icono-li" />Sumar una capa de seguridad efectiva sin asumir costos innecesarios.</li>
              </ul>
            </div>

            <div className="AppImgContainer" data-aos="fade-right">
              {/*<h1 className="tituloApp">App<br/>Hogar<br/>Seguro</h1>*/}
              <img
                src="/img/monitoreo.png"
                alt="Imagen"
                className="AppImg"
              />
            </div>
        </div>
        
  
    </>
  );
};
