import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

import Loader from "./components/loader";
import { Navigation } from "./components/navigation";
import Carrusel from "./components/Carrusel";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Wpp } from "./components/wpp";


import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Marcas } from "./components/marcas";
import { AlarmaMonitoreada } from "./components/alarmaMonitoreada";
import { SeguridadFisica } from "./components/seguridadFisica";
import { HogarSeguroApp } from "./components/hogarSeguroApp";
//import { Page2 } from "./pages/page2";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

 const [landingPageData, setLandingPageData] = useState({});
 const [loading, setLoading] = useState(true); 

 useEffect(() => {
  // Simula carga de datos
  setTimeout(() => {
    setLandingPageData(JsonData);
    setLoading(false);
  }, 1000);
}, []);

// Inicializa AOS una sola vez
useEffect(() => {
  AOS.init({
    duration: 1000,
    offset: 120,
    once: true,
    anchorPlacement: "top-bottom",
  });
}, []);

// Refresca AOS SOLO cuando el loading finaliza
useEffect(() => {
  if (!loading) {
    setTimeout(() => {
      AOS.refresh();
    }, 300); // Ajusta el delay si hace falta
  }
}, [loading]);


  const basename = "/";


  return (
    <>
    <Helmet>
      {/* LinkedIn Insight Tag */}
      <script type="text/javascript">
        {`
          _linkedin_partner_id = "8414809";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </script>
      <script type="text/javascript">
        {`
          (function(l) {
            if (!l) {
              window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) };
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </script>
      <noscript>
    {`
      <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8414809&fmt=gif" />
    `}
  </noscript>
      {/* —————— Inyección de Google Ads en <head> —————— */}
        {/* 1) Carga de la librería gtag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17096308913"
        />
        {/* 2) Configuración y función de conversión */}
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-17096308913');

          window.gtag_report_conversion = function(url) {
            var callback = function(){
              if (url) window.location = url;
            };
            gtag('event', 'conversion', {
              send_to: 'AW-17096308913/TOtWCMTS-MoaELHxk9g_',
              event_callback: callback
            });
            return false;
          };
        `}</script>
    </Helmet>
     {loading ? (
      <Loader />
    ) : (
    <Router basename="/">
      <Navigation />
      <Carrusel />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
             {/* <Features data={landingPageData.Features} /> */}
              <About data={landingPageData.About} />
             {/*<Services data={landingPageData.Services} />*/} 
              <SeguridadFisica/>
              <AlarmaMonitoreada/>
              <HogarSeguroApp/>
              
              {/*<Gallery data={landingPageData.Gallery} />*/}
              <Marcas/>
              {/*<Team data={landingPageData.Team} />*/}
              <Contact data={landingPageData.Contact} />
              <Wpp/>
            </>
          }
        />
       {/*  <Route path="/page2" element={<Page2 data={landingPageData.About}/>} />*/}
      </Routes>
    </Router>
      )}
  </>
  
  );

};

export default App;