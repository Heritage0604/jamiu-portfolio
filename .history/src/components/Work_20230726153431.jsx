import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, SimpleGrid, Flex,Image,Icon,Text } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'
import p1 from '../assets/Fourth.png'
import p2 from '../assets/HR.png'
import p3 from '../assets/Netflix.png'
import p4 from '../assets/Mc.png'

const Work = () => {
  return (
     <Flex mt={"-10vh"} align={"center"} bg={"#869af3ec"}   width={"100%"}>

<Flex flexDirection={"column"} justify={"space-between"} mt={"3vh"} width={"80%"} >
<Flex mb={"2vh"}  width={"80vw"} mt={"5vh"}>
    <Text ml={"20px"}  mr={"10%"} pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>Projects</Text>
</Flex>
<SimpleGrid columns={2} spacingX='40px' spacingY='20px' minChildWidth='120px' ml={"10%"}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>

</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")