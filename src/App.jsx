import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/index'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  )
}

export default App

