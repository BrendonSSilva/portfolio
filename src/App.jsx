import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { LanguageToggle } from "./components/LanguageToggle/LanguageToggle";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Services } from "./components/Main/Services";
import { Skills } from "./components/Main/Skills";
import { Card1 } from "./components/Card1/Card1";
import { Education } from "./components/Main/Courses";
import { Footer } from "./components/Footer/Footer";
import { Jobs } from "./components/Jobs/Jobs";

const Home = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.app.homeTitle;
  }, [t]);

  return (
    <>
      <LanguageToggle />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Jobs />
      <Education />
      <Footer />
    </>
  );
};

const Trabalhos = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.app.workTitle;
  }, [t]);

  return (
    <>
      <LanguageToggle />
      <Card1 />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
