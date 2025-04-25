import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Wpp } from "./components/wpp";


import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
//import { Page2 } from "./pages/page2";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120, // default es 120, podés bajarlo para que se active antes
      once: true
    });
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              {/*<Gallery data={landingPageData.Gallery} />*/}
              <Testimonials data={landingPageData.Testimonials} />
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
