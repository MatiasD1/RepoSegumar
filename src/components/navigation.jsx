import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // estado menú hamburguesa

  const handleScrollTo = (id) => {
    // Espera 50ms para asegurar que el elemento exista en la página
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);

    setIsOpen(false); // cierra menú en móvil
  };

  const goToAlarma = () => {
    navigate("/alarma-monitoreada");
    setIsOpen(false);
  };

  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* Botón hamburguesa visible solo en móvil */}
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
            </button>

            <a
              className="navbar-brand page-scroll"
              href="#page-top"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/") navigate("/");
                handleScrollTo("page-top");
              }}
            >
              <img src="/img/logoSegumar.png" className="logoSegumar" alt="Segumar Logo" />
            </a>
          </div>

          <div className={`collapse navbar-collapse${isOpen ? " show" : ""}`}>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") navigate("/");
                    handleScrollTo("about");
                  }}
                >
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  href="#seguridadFisica"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") navigate("/");
                    handleScrollTo("seguridadFisica");
                  }}
                >
                  Seguridad Física
                </a>
              </li>
              <li>
                <a
                  href="#HogarSeguroApp"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") navigate("/");
                    handleScrollTo("AppHogarSeguro");
                  }}
                >
                  Videovigilancia Inteligente
                </a>
              </li>
              <li>
                <a
                  href="#marcas"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") navigate("/");
                    handleScrollTo("marcas");
                  }}
                >
                  Nuestros Clientes
                </a>
              </li>
              <li>
                <a
                  href="/alarma-monitoreada"
                  onClick={(e) => {
                    e.preventDefault();
                    goToAlarma();
                  }}
                >
                  Alarma Monitoreada
                </a>
              </li>
              <li>
                <a
                  href="/monitoreo-mayorista"
                  rel="noopener noreferrer"
                >
                  Monitoreo Mayorista
                </a>
              </li>
              <li>
                <a
                  href="/postulacion"
                  rel="noopener noreferrer"
                >
                  Trabaja con nosotros
                </a>
              </li> 
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("contact");
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>

            <div className="navbarSocialIcons">
              <a href="https://www.facebook.com/segumarseguridad" target="_blank" rel="noopener noreferrer">
                <img src="/img/fb.png" alt="Icono de Facebook" className="redLogo" />
              </a>
              <a href="https://www.instagram.com/segumar_seguridad" target="_blank" rel="noopener noreferrer">
                <img src="/img/ig.png" alt="Icono de Instagram" className="redLogo" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="whatsapp-bar">
        <p className="whatsapp-bar-cotizar"><strong>COTIZAR</strong></p>
        <a
          href="https://wa.me/542236852201"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button2"
        >
          <i className="fab fa-whatsapp"></i> 2236 85-2201
        </a>
      </div>
    </>
  );
};
