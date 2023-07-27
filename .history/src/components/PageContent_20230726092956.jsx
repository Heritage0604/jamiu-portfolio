import { Flex } from '@chakra-ui/react'
import React from 'react'



const PageContent= ({children}) => {
    
  return (
    <Flex flexDirection={"column"} justify={"center"}  padding={"16px 16px"} bg={"gray.200"} >
        <Flex width="100%"  justify="center" >
            {/* left hand side */}
            <Flex    direction={"column"} width={{base:"20%",md:"15%"}}  mr={{base:5,md:6}}>{children && children[0]}</Flex>
            {/* right hand side */}
            <Flex     width={{base:"75%",md:"75%"}}  flexGrow={1}>{children && children[1]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent