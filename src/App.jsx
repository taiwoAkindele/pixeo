import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutUs,
  ChangePassword,
  EmailVerified,
  ForgotPassword,
  LandingPage,
  Login,
  Signup,
  Success,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="/success" element={<Success />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/email-verify" element={<EmailVerified />} />
    </Routes>
  );
}

export default App;
