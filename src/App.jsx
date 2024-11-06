import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Proyectos from './components/Proyectos';
import Navbar from './components/Navbar';
import MyStudies from './components/MyStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Proyectos />
      <MyStudies />
      <Skills />
      <Contact />
    </>
  )
}

export default App
