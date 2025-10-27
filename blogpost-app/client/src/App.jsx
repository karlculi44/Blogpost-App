import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import HomePage from "./pages/homePage.jsx";
import SignupPage from "./pages/signUp.jsx";
import SignupSuccessPage from "./pages/signupSuccessPage.jsx";
import ProfilePage from "./pages/profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupSuccess" element={<SignupSuccessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
