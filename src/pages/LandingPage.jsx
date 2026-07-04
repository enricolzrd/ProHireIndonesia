import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/UI/Header";
import HeroSection from "../components/UI/HeroSection";
import CardGrid from "../components/UI/CardGrid";
import ContactSection from "../components/UI/ContactSection";

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