import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/index'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Main/Services';
import { Skills } from './components/Main/Skills';
import { Card1 } from './components/Card1/Card1';
import { Courses } from './components/Main/Courses';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Card1 />
      <Courses/>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  )
}

export default App

