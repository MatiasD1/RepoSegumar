import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("page-top");
            }}
          >
            <img src="img/logoSegumar.png" alt="Segumar Logo" />
          </a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
         <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#features" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("features"); }}>
              Quienes somos
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("about"); }}>
              Seguridad Física
            </a>
          </li>
          <li>
            <a href="#services" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("services"); }}>
              Seguridad Electrónica
            </a>
          </li>
       {/*   <li>
            <a href="#portfolio" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("portfolio"); }}>
              Gallery
            </a>
          </li>*/}
          <li>
            <a href="#testimonials" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("testimonials"); }}>
              Nuestros Clientes
            </a>
          </li>
        {/*  <li>
            <a href="#team" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("team"); }}>
              Team
            </a>
          </li>*/}
         {/* <li>
            <Link className="page-scroll" to="/page2">
              Page2
            </Link>
          </li>*/}
          <li>
            <a href="#contact" className="page-scroll" onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); }}>
              Contacto
            </a>
          </li>
        </ul>

        </div>
      </div>
    </nav>
  );
};
