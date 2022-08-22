import { useState,useEffect } from 'react'
import './App.css'
import About from './Components/about/About';
import Cover from './Components/cover/Cover'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills';
import Slider from './Components/Slider/Slider';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
    
  }

  return (
    <div className='app'>
      <Navbar scrollHeight={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
      <Skills/>
    </div>
  )
}

export default App
