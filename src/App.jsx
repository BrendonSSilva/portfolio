import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/index'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Main/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  )
}

export default App

