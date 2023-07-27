import { useState,useEffect } from 'react'
import { Box,Grid,SimpleGrid, Flex,Image,Icon,Text } from '@chakra-ui/react'
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
    <>
  <Flex width={"100vw"} overflowX={}>
    <Icon display={showTopBtn} onClick={onTop} cursor={'pointer'} bg={"blue.200"} borderRadius={"5px"}
     height={"30px"} width={"30px"} position={"fixed"} right={"30px"} bottom={"30px"}
      zIndex={20} fontSize={"18px"} border={"1px solid white"} as={AiOutlineArrowUp}/>
    <Navbar/>
 
     <Services/>
 <About/>
 <Contact2/>
 {/* <Work/> */}
 <Contact/>
 </Flex>
      </>
    
    
  )
}

export default App
