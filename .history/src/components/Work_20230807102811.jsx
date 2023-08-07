import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, SimpleGrid, Flex,Image,Icon,Text, Link } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'
import p1 from '../assets/Fourth.jpg'
import p2 from '../assets/HR.jpg'
import p3 from '../assets/Netflix.jpg'
import p4 from '../assets/Mc.jpg'
import {AiOutlineLink } from "react-icons/ai";

const Work = () => {
  return (
     <Flex mt={"-10vh"} align={"center"} bg={"#869af3ec"}   width={"100%"}>

<Flex flexDirection={"column"} justify={"space-between"} mt={"3vh"} width={"80%"} >
<Flex mb={"2vh"}  width={"80vw"} mt={"5vh"}>
    <Text ml={"20px"}  mr={"10%"} pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>Projects</Text>
</Flex>
<SimpleGrid justify={"center"} mb={"2vh"} columns={2} spacingX='40px' spacingY='20px' minChildWidth='200px' ml={"10%"}>
  <Box bg={"gray.200"} position={"relative"}  height='230px'>
     <Icon color={"white"} fontSize={'18px'} position={"absolute"} right={"20px"} top={"15px"} as={AiOutlineLink}/>
     <img
    
            src={p1}
            alt={'Projects'}
            className='w-[100%] h-[100%] object-cover'
          />
  </Box>
<Box position={"relative"} >
      <Icon color={"white"} fontSize={'18px'} position={"absolute"} right={"20px"} top={"15px"} as={AiOutlineLink}/>
  <Box  bg={"gray.200"} position={"relative"}  height='230px'>
     <img
            src={p2}
            alt={'Projects'}
            className='w-[100%] h-[100%] object-cover'
          />
  </Box>
</Box>
  <Box bg={"gray.200"} position={"relative"}  height='200px'>
      <Icon color={"white"} fontSize={'18px'} position={"absolute"} right={"20px"} top={"15px"} as={AiOutlineLink}/>
     <img
            src={p3}
            alt={'Projects'}
            className='w-[100%] h-[80%] object-cover'
          />
          <Link isExternal  ml={"10%"}>
           Dashboard
          </Link>
          <Link ml={"10%"}>
           Data Analysis
          </Link>
  </Box>
<Box bg={"gray.200"} position={"relative"}  height='230px'>
      <Icon color={"white"} fontSize={'18px'} position={"absolute"} right={"20px"} top={"15px"} as={AiOutlineLink}/>
  <Box  height='180px'>
     <img
            src={p4}
            alt={'Projects'}
            className='w-[100%] h-[80%] object-cover'
          />
  </Box>
    <Link isExternal  ml={"10%"}>
           Dashboard
          </Link>
          <Link ml={"10%"}>
           Data Analysis
          </Link>
  </Box>

</SimpleGrid>

</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")