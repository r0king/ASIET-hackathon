import "./App.css";
import "animate.css/animate.min.css";
import Install from "./componets/Install";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import PosterCard from "./componets/PosterCard";
import Animation from "./componets/Animation";

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
          <Route exact path="/pos" element={<PosterCard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
