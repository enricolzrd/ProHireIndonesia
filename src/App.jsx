import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Data
import { featureData } from "./data/features";
// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

// 1. Bagian yang kamu tambahkan aman di sini (Import Dashboard kamu)
import DashboardJob from "./components/DashboardJob";

import Footer from "./components/Footer";

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
            {/* Kode asli teman kelompokmu tetap utuh di bawah ini */}
            <Route path="/" element={<LandingPage features={features} />} />
            <Route path="/login" element={<LoginPageWrapper />} />

            {/* 2. Bagian rute yang kamu tambahkan agar dashboard-mu bisa dipanggil */}
            <Route path="/jobs" element={<DashboardJob />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
