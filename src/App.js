import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import FAQ from "./componets/Faq";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Hero from "./componets/Hero";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={<HomePage/>}
          />
          <Route exact path="/:name/" element={<Install />} />
          <Route path="/ex" element={<Card />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/para" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
