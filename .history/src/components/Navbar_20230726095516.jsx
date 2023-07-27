import React,{useEffect,useState} from 'react'
import { Link } from '@chakra-ui/react'

import {styles} from "../styles"

  import reactLogo from '../assets/react.svg'
import forestLogo from '../assets/forest.svg'
import forest2Logo from '../assets/forest2.svg'
import viteLogo from '/vite.svg'
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";


const Navbar = () => {
    
  const onTop=()=>{
  window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });
}
  const onTop2=()=>{
  window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
}
  const onTop3=()=>{
  window.scrollTo({ top: 3600, left: 0, behavior: 'smooth' });
}
  const onTop4=()=>{
  window.scrollTo({ top: 1600, left: 0, behavior: 'smooth' });
}
  const onTop5=()=>{
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
//   const onTop6=()=>{
//   window.scrollTo({ top: 3600, left: 0, behavior: 'smooth' });
// }

  return (
   <Flex flexDirection={}>
     <Flex position={"sticky"} top={"0px"} zIndex={20} border={"1px solid #e8edea "} boxShadow='lg' rounded='md' bg='white' height={"10vh"} align={'center'} width={"100vw"} >
   <Flex ml={{base:'3%',md:"10%"}}>
    <Link  href='/' cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}  fontSize={{base:"13px",md:"18px"}}>
    JAMIU
    </Link>
    </Flex>
    <Flex  fontSize={{base:"13px",md:"18px"}} justifyContent="space-between" ml={{base:'15%',md:"20%"}} width={{base:"65%",md:"40%"}} >
      <Link onClick={onTop} cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>SERVICES</Link>
      <Link onClick={onTop2} display={{base:"flex",md:"none"}} cursor="pointer " _hover={{color:"blue.400",transition:"0.5s"}}>ABOUT ME</Link>
      <Link onClick={onTop4} display={{base:"none",md:"flex"}} cursor="pointer " _hover={{color:"blue.400",transition:"0.5s"}}>ABOUT ME</Link>
      <Link cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>WORKS</Link>
      <Link onClick={onTop3} display={{base:"flex",md:"none"}}   cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>CONTACT </Link>
      <Link onClick={onTop5} display={{base:"none",md:"flex"}} cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>CONTACT </Link>
    </Flex>
      </Flex>
      <Flex justify="center" mt={"3vh"} position={"relative"} height={"80vh"}>
       <Text color={"white"} border={"1px solid white"} height={"px"} borderRadius={"10px"} position={"absolute"} top={"50%"} transform={" translate(-50%, -50%);"} left={"50%"}>Jamiu Data Analyst</Text>
        <Image objectFit='cover' width={"90vw"}   src={forest2Logo} alt='forest' />
      </Flex>
  <Flex mb={"5vh"}  justify={"center"} mt={"10px"} >
    {/* <Flex  align={"center"} border={"1px solid"} width={"50%"}>
<Icon as={BiSolidQuoteAltLeft} fontSize={"25px"}/>
<Text ml={"5px"} fontSize={{base:"15px",md:"20px"}}>Transforming Data into Insights: Unraveling the Stories behind the Numbers</Text>
<Icon ml={"5px"} as={BiSolidQuoteAltRight} fontSize={"25px"}/>
    </Flex> */}
    
  </Flex>
   </Flex>
  )
}

export default Navbar