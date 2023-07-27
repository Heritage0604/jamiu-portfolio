import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, SimpleGrid, Flex,Image,Icon,Text } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'

const Work = () => {
  return (
     <Flex mt={"-10vh"} align={"center"} bg={"#869af3ec"}   width={"100%"}>

<Flex flexDirection={"column"} justify={"space-between"} mt={"3vh"} width={"80%"} >
<Flex  width={"80vw"} mt={"5vh"}>
    <Text ml={"20px"}  mr={"10%"} pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>Projects</Text>
</Flex>
<SimpleGrid ml={"10px"} border={"1px solid red"} mt={"2vh"}  columns={2} spacing={5}>
     <Box bg='tomato' width={"130px"} height='200px'></Box>
  <Box bg='tomato'  width={"130px"} height='80px'></Box>
  </SimpleGrid>
<Flex>projects</Flex>
</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")