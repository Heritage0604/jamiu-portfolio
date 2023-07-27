import { Flex } from '@chakra-ui/react'
import React from 'react'



const PageContent= ({children}) => {
    
  return (
    <Flex flexDirection={"column"} width={"100vw"}  bg={"gray.200"} >
        <Flex border={"2px solid"} width="100%" flexDirection={"column"}  justify="center" >
            {/* left hand side */}
            <Flex  flexDirection={"column"}   width={'100%'}  >{children && children[0]}</Flex>
            {/* right hand side */}
            <Flex     width={'100%'}  >{children && children[1]}</Flex>
            <Flex     width={'100%'}  >{children && children[2]}</Flex>
            <Flex     width={'100%'}  >{children && children[3]}</Flex>
            <Flex     width={'100%'}  >{children && children[4]}</Flex>
            <Flex     width={'100%'}  >{children && children[5]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent