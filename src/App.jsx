import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Data
import { featureData } from "./data/features";
// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardJob from "./pages/Jobdashboard";

import Footer from "./components/UI/Footer";

const LoginPageWrapper = () => {
  const navigate = useNavigate();
  return <LoginPage onBack={() => navigate("/")} />;
};

export default function App() {
  const [features] = useState(featureData);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>

            <Route path="/" element={<LandingPage features={features} />} />
            <Route path="/login" element={<LoginPageWrapper />} />
            <Route path="/jobs" element={<DashboardJob />} />

          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
