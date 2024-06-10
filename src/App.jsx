import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/index'
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  )
}

export default App

