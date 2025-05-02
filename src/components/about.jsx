import React from "react";
export const About = (props) => {

  if (!props.data) return null;
  return (
    <div id="about">
      <div className="container">
        {/* Fila superior */}
          <div className="row align-items-center mb-5" data-aos="fade-right">
            <div className="col-xs-12 col-md-6">
              <img src="img/about.jpg" className="img-responsive" alt="Nosotros" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>¿Quiénes Somos?</h2>
                <p>{props.data ? props.data.paragraph : "Cargando..."}</p>
              </div>
            </div>
          </div>

          {/* Fila invertida */}
          
          <div className="align-items-center mb-5 rowReverseAbout" data-aos="fade-left">{/*Tuve que sacar la clase row de bootstrap para poder invertir la fila*/}
            <div className="col-xs-12 col-md-6 order-md-2">
              <img src="img/about.jpg" className="img-responsive" alt="Nosotros" />
            </div>
            <div className="col-xs-12 col-md-6 order-md-1">
              <div className="about-text">
                <p>{props.data ? props.data.paragraph2 : "Cargando..."}</p>
              </div>
            </div>
          </div>

        {/* Por qué confiar */}
        <div className="row justify-content-center">
            <div className="about-text">
              <h3>¿Por qué confiar en nosotros?</h3> 
              {/*<h5>Ofrecemos soluciones adaptadas a cada necesidad</h5>*/}
              <div className="razones-container">
              {/*<h3>¿Por qué confiar en nosotros?</h3>*/}
  <div className="fila">
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Atención Personalizada</h4>
      <p>Brindamos atención personalizada, logrando una rápida respuesta gracias a una estructura flexible y una base de operaciones las 24hs.</p>
    </div>
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Seguridad e Higiene</h4>
      <p>Contamos con un departamento de seguridad e higiene. Función clave y de vital importancia en nuestra organización.</p>
    </div>
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Eficiencia</h4>
      <p>Nuestros vigiladores están equipados y capacitados para actuar con máxima eficacia en cada servicio.</p>
    </div>
  </div>
  <div className="fila">
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Supervisión Constante</h4>
      <p>Efectuamos supervisiones de los servicios constantemente con el objetivo de asegurar la eficaz custodia del patrimonio de la familia o empresa contratante.</p>
    </div>
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Experiencia</h4>
      <p>Contamos con bases sólidas y personal jerárquico con más de 30 años de experiencia en seguridad, lo que nos permite analizar cada objetivo e identificar el servicio más adecuado para cada situación.</p>
    </div>
    <div className="reason-item" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <h4>Compromiso y Adaptabilidad</h4>
      <p>Nos involucramos con responsabilidad y ética en cada proyecto, brindando soluciones flexibles y alineadas a las necesidades de nuestros clientes.</p>
    </div>
  </div>
</div>

        </div>
        </div>
      </div>
      <img src="img/SS anmac.png" alt="Anmac" className="anmacImg" />
    </div>
  );
};
