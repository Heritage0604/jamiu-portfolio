import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'

const Work = () => {
  return (
     <Flex flexDirection={"column"} align={"center"} bg={"#869af3ec"}   width={"100%"}>

<Flex justify={"space-between"} mt={"3vh"} width={"80%"} >

<Flex display={{base:"none",md:"flex"}}><Image width={'300px'} src={j2}/></Flex>
</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")