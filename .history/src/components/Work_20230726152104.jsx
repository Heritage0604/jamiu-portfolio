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
<Flex width=["80vw"] border={"1px solid green"}>  
    Hey Hey
</Flex>

</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")