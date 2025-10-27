import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import HomePage from "./pages/homePage.jsx";
import SignupPage from "./pages/signUp.jsx";
import SignupSuccessPage from "./pages/signupSuccessPage.jsx";
import ProfilePage from "./pages/profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UnauthorizedPage from "./pages/unauthorizedPage.jsx";
import NotFoundPage from "./pages/404NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/homePage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupSuccess" element={<SignupSuccessPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
