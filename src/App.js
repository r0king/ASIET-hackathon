import "./App.css";
import "animate.css/animate.min.css";
import Install from "./componets/Install";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import ComingSoon from "./componets/Coming_soon";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/:name/" element={<Install />} />
          <Route path="/coming_soon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
