import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardGrid from "./components/CardGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import { featureData } from "./data/features";

const App = () => {
  const [features] = useState(featureData);
  const [page, setPage] = useState("home");

  if (page === "login") {
    return (
      <>
        <LoginPage onBack={() => setPage("home")} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onLogin={() => setPage("login")} />
      <HeroSection />
      <CardGrid features={features} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;