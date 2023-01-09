import "./App.css";
import "animate.css/animate.min.css";
import TypeAnimation from "./componets/TypeAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import ComingSoon from "./componets/Coming_soon";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/:name/" element={<TypeAnimation />} />
          <Route path="/coming_soon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
