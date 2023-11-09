import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs, LandingPage, Login, Signup } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
