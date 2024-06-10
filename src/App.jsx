import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/index'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Main/Services';
import { Skills } from './components/Main/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  )
}

export default App

