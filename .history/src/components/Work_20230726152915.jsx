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
import p2 from '../assets/Fourth.png'
import p3 from '../assets/Fourth.png'
import p4 from '../assets/Fourth.png'

const Work = () => {
  return (
     <Flex mt={"-10vh"} align={"center"} bg={"#869af3ec"}   width={"100%"}>

<Flex flexDirection={"column"} justify={"space-between"} mt={"3vh"} width={"80%"} >
<Flex mb={"2vh"}  width={"80vw"} mt={"5vh"}>
    <Text ml={"20px"}  mr={"10%"} pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>Projects</Text>
</Flex>
<Flex ml={"10px"} mr={"10px"} justify={{base:"space-between",md:"space-around"}} width={"80vw"} >  
    <Flex>
        <Image src={j2}  width={{base:"150px",md:"150px"}} />
    </Flex>
    <Flex ml={"10px"}>
          <Image src={j2} width={{base:"150px",md:"150px"}}  />
    </Flex>
</Flex>
<Flex mt={"2vh"} ml={"10px"} mr={"10px"} justify={{base:"space-between",md:"space-around"}} width={"80vw"} >  
    <Flex>
        <Image src={j2}  width={{base:"150px",md:"150px"}} />
    </Flex>
    <Flex ml={"10px"}>
          <Image src={j2} width={{base:"150px",md:"150px"}}  />
    </Flex>
</Flex>

</Flex>

   </Flex>
  )
}

export default SectionWrapper(Work,"work")