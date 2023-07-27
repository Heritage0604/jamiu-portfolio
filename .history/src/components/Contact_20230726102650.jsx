import React from 'react'
import { SectionWrapper } from '../hoc'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Box, Flex,Image,Icon,Text,Link } from '@chakra-ui/react'
import { BsLinkedin } from "react-icons/bs";
import {fadeIn,textVariant} from "../utils/motion"
import { motion } from 'framer-motion'



const Contact = () => {
  return (
    
  <Flex color={"#4e4e4c"}  flexDirection={"column"} width={"100%"} justify={'center'}>
   <Flex align={"center"} flexDirection={"column"}>
      <Flex b  width={"80%"}>
      <Text fontSize={{base:"15px",md:"18px"}} color={"gray.900"} borderBottom={"1px solid#b0aea9"} pr={"25px"} height={"30px"} >
        CONTACT
    </Text>
  </Flex>
  <Flex width={"80%"}  color={"#4e4e4c"} mt={"10px"}>
<Text fontSize={"15px"}  color={"#4e4e4c"}>
<Text fontSize={"18px"} fontWeight={"900"}>Jamiu</Text>

<br/>
As data scientist, I know exactly how you can use data optimally within your business. Based on your objectives, we will make a plan to reach the right insight.
</Text>
  </Flex>

  <Flex  mt={"3vh"} width={"80%"} flexDirection={"column"}>
    <Flex >
        <Text width={"50%"} fontSize={"20px"} fontWeight={"700"}>I am available for</Text>
        <Text fontSize={"20px"} display={{base:"none",md:"flex"}} fontWeight={"700"}>Rates</Text>
    </Flex>
<Flex mt={"0vh"} >
    <Flex width={'40%'}>
    <UnorderedList fontSize={"15px"}>
  <ListItem >Data Analysis and Visualization(Cleaning,Organization and Trend Analysis) </ListItem>
  <ListItem>Data Presentation(Storytelling, how to present Data)</ListItem>
  <ListItem>Data Scraping and Mining</ListItem>
  <ListItem>SQL(Database construction and Manipilation)</ListItem>
  <ListItem>Advice and freelance data projects</ListItem>
</UnorderedList>
</Flex>
<Flex display={{base:"none",md:"flex"}} ml={"20px"}>
    <UnorderedList fontSize={"15px"}>
  <ListItem>Data Analysis and Visualization: $400 per day</ListItem>
  <ListItem>Data Presentation: starting from $20 per hour</ListItem>
  <ListItem>SQL Database Construction and Manipulation: starting from $100</ListItem>

</UnorderedList>
</Flex>
</Flex>
<Flex flexDirection={"column"} mt={"5vh"} display={{base:"flex",md:"none"}} >
     <Text fontSize={"20px"} display={{base:"flex",md:"none"}} fontWeight={"700"}>Rates</Text>
    <UnorderedList fontSize={"15px"}>
  <ListItem>Data Analysis and Visualization: $400 per day</ListItem>
  <ListItem>Data Presentation: starting from $20 per hour</ListItem>
  <ListItem>SQL Database Construction and Manipulation: starting from $100</ListItem>

</UnorderedList>
</Flex>
</Flex>
</Flex>
<Flex mt={"2vh"} justify={"center"} mb={"0vh"} height={"20vh"} bg={"#627be9eb"} >
<Flex mt={"3vh"} flexDirection={"column"}  width={"80%"}>
    <Text mb={"3vh"} width={{base:"50%"}} fontSize={{base:"20px"}}  color={"black"}   pr={"20px"} borderBottom={'1px solid white'} >LINKEDIN</Text>
    <Text fontSize={"15px"} color={"black"}   >we can get in touch via <Link textAlign={"center"} isExternal href={"https://www.linkedin.com/in/jamiu-gbadamosi-ba342326a"} _hover={{color:"blue"}} color={"blue"}>LinkedIn  <Icon color={"blue"} ml={"0px"} as={BsLinkedin}/></Link>
    </Text>

</Flex>
</Flex>
<Flex   justify={"center"}bg={"#869af3ec"}width={"100%"} >
<Flex flexDirection={"column"}  width={"80%"}>
<Text>
    Jamiu Data analysis
</Text>
 <Link color={"blue"} _hover={{color:"blue"}} href="mailto:jamzy.j21@gmail.com">jamzy.j21@gmail.com</Link>
 <Flex flexDirection="column" mt={"3vh"}>
    <Text>
        Location:
Lagos region (Nigeria) or remote work
    </Text>
 <Flex>
       <Text mr="3px">Phone Number:</Text>
       <Link color={"blue"} _hover={{color:"blue"}} href="tel:+234 901 851 7578">+234 901 851 7578</Link>
 </Flex>
 </Flex>
 <Flex justify={"center"}  mt={"6vh"}>
    <Flex >
        <Text color={"black"} fontSize={{base:"15px"}}> &#169; 2023 Jamiu Data Analysis</Text>
    </Flex>
</Flex>
</Flex>

</Flex>

  </Flex>
  </motion.div>
  )
}

export default SectionWrapper(Contact,"contact")