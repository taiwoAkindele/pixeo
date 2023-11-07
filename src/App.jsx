import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs, LandingPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
