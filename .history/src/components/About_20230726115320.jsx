import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import d6Logo from '../assets/d6.png'
import j2 from '../assets/j2.jpg'

const About = () => {
  return (
   <Flex flexDirection={"column"} align={"center"} bg={"#869af3ec"}   width={"100vw"}>
      <Flex border={"1px solid green"} flexDirection={"column"}>
<Flex  width={"90vw"} mt={"5vh"}>
    <Text pr={"30px"} height={{bae:"30px",md:"40px"}} borderBottom={"1px solid white"} fontWeight={"300"} fontSize={{base:"15px",md:"25px"}}>ABOUT ME</Text>
</Flex>
<Flex justify={"space-between"} mt={"3vh"} width={"80vw"} >
<Flex mb={'2vh'} width={{base:"100%",md:"70%"}}><Text color={"white"}>
    Hi, my name is Jamiu Gbadamosi, an ambitious undergraduate pursuing Mechatronics engineering. From my early days in high school, I've had a natural affinity for organizing and interpreting data to uncover meaningful trends. My journey began with Excel sheets, where I realized the power of data analysis in making informed decisions.

As I progressed in my studies, I was introduced to the fascinating world of Machine Learning, and that's when everything clicked for me. The potential to derive valuable insights from vast datasets ignited my passion for data analytics. Determined to follow my newfound calling, I decided to embark on a career in data analytics.

Throughout my academic journey, I've honed my skills in SQL, Excel, and various data visualization tools, empowering me to transform raw data into actionable insights. Additionally, my background in Mechatronics engineering gives me a unique perspective on problem-solving and a knack for applying data-driven solutions to real-world challenges.

I'm thrilled to leverage my analytical prowess and Machine Learning knowledge to help businesses unravel the hidden potential in their data. I am committed to delivering precise and impactful results that drive growth and enhance decision-making processes.

Join me on this data-driven journey, and let's discover the true power of your data together

    </Text></Flex>
<Flex display={{base:"none",md:"flex"}}><Image width={'300px'} src={j2}/></Flex>
</Flex>
<Flex display={{base:"flex",md:"none"}} justify={"center"}><Image width={'250px'} src={j2}/></Flex>
    

</Flex>
   </Flex>
  )
}

export default  SectionWrapper(About,"about")