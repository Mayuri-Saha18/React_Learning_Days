import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    
  } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <Flex justifyContent="space-between" p="10px" width="100%" margin="auto" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">

        <Box p="10px" marginLeft="20px">
            <Image w="200px" src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png">

            </Image>
        </Box>


        <Flex justifyContent="space-evenly" p="10px" fontWeight="700" columnGap="2rem" marginRight="20px">

            <Text _hover={{background:"grey",color:"white",padding:"5px 10px", cursor:"pointer"}} color="#2B6CB0">Home</Text>
            <Text _hover={{background:"grey",color:"white",padding:"5px 10px", cursor:"pointer"}} color="#2B6CB0">Class</Text>
            <Text _hover={{background:"grey",color:"white",padding:"5px 10px", cursor:"pointer"}} color="#2B6CB0">About</Text>
            <Text _hover={{background:"grey",color:"white",padding:"5px 10px", cursor:"pointer"}} color="#2B6CB0">Blog</Text>
            <Text _hover={{background:"grey",color:"white",padding:"5px 10px", cursor:"pointer"}} color="#2B6CB0">Contest</Text>
            <Button backgroundColor="#63B3ED" border="none" color="#F7FAFC" padding="20px" borderRadius="20px" fontSize="18px">Enroll Now</Button>
        </Flex>
    </Flex>

      
   
  )
}

export default Navbar