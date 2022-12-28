import logo from "./logo.svg";
import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./componets/Hero";
import ComingSoon from "./componets/Coming_soon";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route exact path="/:name/" element={<Install />} />
        <Route path="/ex" element={<Card/>}/>
        <Route path="/coming_soon" element={<ComingSoon/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
