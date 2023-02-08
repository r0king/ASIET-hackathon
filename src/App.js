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
import Techathon from "./componets/Techathon/Techathon";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import LoadingIcons from "react-loading-icons";
import PrizeCard from "./componets/Utils/PrizeCard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
        }}
        className={`bg-black z-[999] h-screen w-screen flex flex-col justify-center items-center ${
          !loading && "hidden"
        }`}
      >
        <LoadingIcons.Puff
          fill="#f0f0f0"
          strokeOpacity={1}
          height={"3.5rem"}
          className="w-20 h-20"
        />
        <div className="flex justify-center text-center ">Loading…</div>
      </div>
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
          <Route exact path="/young scientist award" element={<Ideathon />} />
          <Route exact path="/mechathon" element={<Mechathon />} />
          <Route exact path="/civiathon" element={<Civilathon />} />
          <Route exact path="/bizthon" element={<Bizthon />} />
          <Route exact path="/techathon" element={<Techathon />} />
          <Route exact path="/prize" element={<PrizeCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
