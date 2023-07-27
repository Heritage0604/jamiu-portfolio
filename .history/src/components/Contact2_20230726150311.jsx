import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, Flex,Image,Icon,Text, Link } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'

const Contact2 = () => {
  return (
     
    <Flex mt={"-20vh"} flexDirection={"column"} align={"center"} bg={"#627be9eb"}   width={"100%"}>
<Flex width={"100%"} mt={"5vh"}>
    <Text pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>WONDERING HOW YOU CAN MAKE THE BEST DECISIONS USING YOUR DATA?</Text>
</Flex>
<Flex  width={"60%"} justify={"center"}>
  <Link href='#contact' p={"10px 20px"} border={"1px solid white"} textAlign={"center"} width={{base:"80%"}} mb={"2vh"} mt={"2vh"} bg={"white"} > Get in Touch</Link>
</Flex>

   </Flex>
   )
}

export default  SectionWrapper(Contact2,"contact2")