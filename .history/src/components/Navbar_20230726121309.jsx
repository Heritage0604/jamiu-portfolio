import React,{useEffect,useState} from 'react'
import { Button, Link } from '@chakra-ui/react'

import {styles} from "../styles"

  import reactLogo from '../assets/react.svg'
import forestLogo from '../assets/forest.svg'
import forest2Logo from '../assets/forest2.svg'
import viteLogo from '/vite.svg'
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)


const Navbar = () => {
    
  const onTop=()=>{
  window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });
}
  const onTop2=()=>{
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
  const onTop3=()=>{
  window.scrollTo({ top: 36=800, left: 0, behavior: 'smooth' });
}
  const onTop4=()=>{
  window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
}
  const onTop5=()=>{
  window.scrollTo({ top: 2800, left: 0, behavior: 'smooth' });
}
//   const onTop6=()=>{
//   window.scrollTo({ top: 3600, left: 0, behavior: 'smooth' });
// }

  return (
   <Flex align={"center"} flexDirection={"column"}>
     <Flex  position={"fixed"} top={"0px"} zIndex={20} border={"1px solid #e8edea "} boxShadow='lg' rounded='md' bg='white' height={"10vh"} align={'center'} width={"100vw"} >
   <Flex ml={{base:'3%',md:"10%"}}>
    <Link  href='/' cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}  fontSize={{base:"13px",md:"18px"}}>
    JAMIU
    </Link>
    </Flex>
    <Flex  fontSize={{base:"13px",md:"18px"}} justifyContent="space-between" ml={{base:'15%',md:"20%"}} width={{base:"85%",md:"40%"}} >
      <Link onClick={onTop} display={{base:"none",md:"flex"}} cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>SERVICES</Link>
      <Link onClick={onTop4} display={{base:"none",md:"flex"}} cursor="pointer " _hover={{color:"blue.400",transition:"0.5s"}}>ABOUT ME</Link>
      <Link cursor="pointer" display={{base:"none",md:"flex"}} _hover={{color:"blue.400",transition:"0.5s"}}>WORKS</Link>
      <Link onClick={onTop5} display={{base:"none",md:"flex"}} cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>CONTACT </Link>

<Flex display={{base:"flex",md:"none"}} ml={"70%"} mr={"20px"}>
<Menu>
  <MenuButton   >
    <Icon as={HamburgerIcon}/>
  </MenuButton>
  <MenuList>
      <MenuItem onClick={onTop}>
    <Link  display={{base:"flex",md:"flex"}} cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>SERVICES</Link>
    </MenuItem>
    <MenuItem onClick={onTop2}>
     <Link  display={{base:"flex",md:"none"}} cursor="pointer " _hover={{color:"blue.400",transition:"0.5s"}}>ABOUT ME</Link>
    </MenuItem>
    <MenuItem onClick={onTop3}>
          <Link  display={{base:"flex",md:"none"}}   cursor="pointer" _hover={{color:"blue.400",transition:"0.5s"}}>CONTACT </Link>
    </MenuItem>
  
  
  </MenuList>
</Menu>
</Flex>

    </Flex>
      </Flex>


      <Flex mt={"15vh"} justify="center"  position={"relative"} height={"80vh"}>
       <Text color={"white"} border={"1px solid white"} height={"px"} borderRadius={"10px"} position={"absolute"} top={"50%"} transform={" translate(-50%, -50%);"} left={"50%"}>Jamiu Data Analyst</Text>
        <Image objectFit='cover' width={"90vw"}   src={forest2Logo} alt='forest' />
      </Flex>


  <Flex mb={"1vh"}  justify={"center"} mt={"10px"} >
  </Flex>
   </Flex>
  )
}

export default Navbar