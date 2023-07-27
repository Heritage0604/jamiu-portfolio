import { useState,useEffect } from 'react'
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'
import Contact2 from './components/Contact2'
import Contact from './components/Contact'
import {AiOutlineArrowUp } from "react-icons/ai";
// import './App.css'

function App() {
 const [showTopBtn, setShowTopBtn] = useState("none");
const onTop=()=>{
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setShowTopBtn("flex");
        } else {
            setShowTopBtn("none");
        }
    });
}, []);
  return (
    
    <page
    
    
  )
}

export default App
