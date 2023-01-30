import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import ComingSoon from "./componets/Coming_soon";
import Codathon from "./componets/Codathon/Codathon";
import Gameathon from "./componets/Gameathon/Gameathon";
import Ideathon from "./componets/Ideathon/Ideathon";
import Mechathon from "./componets/Mechathon/Mechathon";
import Civilathon from "./componets/Civilathon/Civilathon";
import Bizthon from "./componets/Bizthon/Bizthon";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import { Waves } from 'loading-animations-react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


  return (
    <>
      {loading?
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}><Waves/></div>:
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <ParallaxProvider>
                <HomePage />
              </ParallaxProvider>
            }
          />
          <Route path="/coming_soon" element={<ComingSoon />} />
          <Route exact path="/codathon" element={<Codathon />} />
          <Route exact path="/gameathon" element={<Gameathon />} />
          <Route exact path="/ideathon" element={<Ideathon />} />
          <Route exact path="/mechathon" element={<Mechathon />} />
          <Route exact path="/civilathon" element={<Civilathon />} />
          <Route exact path="/bizthon" element={<Bizthon />} />
        </Routes>
      </BrowserRouter>}
    </>
  );
}

export default App;
