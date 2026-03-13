import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

import Loader from "./components/loader";
import { ScrollToTop } from "./components/scrollToTop";
import { Navigation } from "./components/navigation";
import Carrusel from "./components/Carrusel";
import { About } from "./components/about";
import { Marcas } from "./components/marcas";
import { MonitoreoMayorista } from "./components/monitoreoMayorista";
import { TrabajaConNosotros } from "./components/trabajaConNosotros";
import { Postulacion } from "./components/postulacion";
import { Contact } from "./components/contact";
import { Wpp } from "./components/wpp";
import { SeguridadFisica } from "./components/seguridadFisica";
import { HogarSeguroApp } from "./components/hogarSeguroApp";
import { AlarmaMonitoreada } from "./components/alarmaMonitoreada";
import { PoliticaPrivacidad } from "./components/pdp";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Footer } from "./components/footer";
import { PromoBanner } from "./components/promoBanner";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// === LandingWrapper ===
const LandingWrapper = ({ landingPageData }) => {
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
      <Carrusel />
      <About data={landingPageData.About} />
      <SeguridadFisica />
      <HogarSeguroApp />
      <AlarmaMonitoreada />
      <MonitoreoMayorista />
      <Marcas />
      <TrabajaConNosotros/>

    </>
  );
};

// === App ===
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLandingPageData(JsonData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router basename="/">
          <ScrollToTop />
          <Navigation />
          <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingWrapper landingPageData={landingPageData} />
      
                  <Contact data={landingPageData.Contact} />
                </>
              }
            />

            <Route
              path="/alarma-monitoreada"
              element={
                <>
                  <AlarmaMonitoreada />
                  <PromoBanner />
                  <Contact data={landingPageData.Contact} />
                </>
              }
            />
            <Route
              path="/monitoreo-mayorista"
              element={
                <>
                  <MonitoreoMayorista />
                  <Contact data={landingPageData.Contact} />
                </>
              }
            />
            <Route 
              path="/postulacion" 
              element={
                <>  
                <Postulacion />
                <Contact data={landingPageData.Contact} />
                </>
              } 
            />
            <Route 
              path="/politica-privacidad"
              element={
              <>
              <PoliticaPrivacidad /> 
              <Contact data={landingPageData.Contact} />
              </>
            }
          />
          </Routes>
          </div>
          <Wpp />
          <Footer/>
        </Router>
      )}
    </>
  );
};

export default App;
