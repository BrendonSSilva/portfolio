import './App.css'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Main/Services';
import { Skills } from './components/Main/Skills';
import { Card1 } from './components/Card1/Card1';
import { Courses } from './components/Main/Courses';
import { Footer } from './components/Footer/Footer';
import { Jobs } from './components/Jobs/Jobs';

const Home = () => {
  useEffect(() => {
    document.title = 'Brendon Silva - Desenvolvedor Full-Stack e Designer';
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Jobs />
      <Courses />
      <Footer />
    </>
  );
};

const Trabalhos = () => {
  useEffect(() => {
    document.title = 'Trabalhos - Brendon Silva';
  }, []);

  return <Card1 route='' />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Trabalhos />} />
      </Routes>
    </Router>
  );
};

export default App;