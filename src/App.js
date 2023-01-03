import "./App.css";
import "animate.css/animate.min.css";
import Install from "./componets/Install";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Productathon from "./componets/Productathon/Productathon";
import Gameathon from "./componets/Gameathon/Gameathon";
import Ideathon from "./componets/Ideathon/Ideathon";

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
          <Route exact path="/productathon" element={<Productathon />} />
          <Route exact path="/gameathon" element={<Gameathon />} />
          <Route exact path="/ideathon" element={<Ideathon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
