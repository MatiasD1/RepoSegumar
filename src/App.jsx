import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

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

  // Cargo datos de JSON
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // Inicializo AOS solo una vez
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Refresca AOS tras cada render para recalcular posiciones
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <Router>
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
  );
};

export default App;