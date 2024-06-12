import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Main/Services';
import { Skills } from './components/Main/Skills';
import { Card1 } from './components/Card1/Card1';
import { Courses } from './components/Main/Courses';
import { Footer } from './components/Footer/Footer';
import { Jobs } from './components/Jobs/Jobs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <Skills />
              <Jobs />
              <Courses />
              <Footer />
            </>
          } />
          <Route path="/trabalhos" element={<Card1 route='' />} />
        </Routes>
      </Router>

      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
    </>
  )
}

export default App

