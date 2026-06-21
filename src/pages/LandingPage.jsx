import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CardGrid from "../components/CardGrid";
import ContactSection from "../components/ContactSection";

export default function LandingPage({ features }) {
  const navigate = useNavigate();

  return (
    <>
      <Header onLogin={() => navigate("/login")} />
      <HeroSection />
      <CardGrid features={features} />
      <ContactSection />
    </>
  );
}