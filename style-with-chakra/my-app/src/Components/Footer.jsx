import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    VStack,
    UnorderedList,
    ListItem,
    
  } from '@chakra-ui/react';
  import {FaFacebook, FaLinkedin, FaPinterest, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <Box p="20px" margin="auto" marginTop="50px" border="1px solid black" backgroundColor="#4255A4" color="white">
        
        <Flex justifyContent="space-around">

            <VStack rowGap="1rem" >


                <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo2_footer.png"/>


                <Box>

                        <Text>Users and submit their own items. You can create</Text>

                        <Text>different packages and by connecting with your PayPal</Text>


                        <Text>or Stripe account charge users for registration.</Text>

                </Box>
                <Flex gap="10px">
                    <Box borderRadius="50px" padding="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <FaTwitter size={20}/>
                    </Box>


                    <Box borderRadius="50px" padding="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <FaFacebook size={20}/>
                    </Box>


                    <Box borderRadius="50px" padding="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <FaPinterest size={20}/>
                    </Box>


                    <Box borderRadius="50px" padding="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <FaLinkedin size={20}/>
                    </Box>


                </Flex>
            </VStack>
            <UnorderedList listStyleType="none" spacing={10}>

                <ListItem fontSize="22px" fontWeight="600">Quick Links</ListItem>
                <ListItem>Classes</ListItem>
                <ListItem>Join with us</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Events</ListItem>
            </UnorderedList>


            <UnorderedList listStyleType="none" spacing={10}>

                <ListItem fontSize="22px" fontWeight="600">About Us</ListItem>
                <ListItem>Our team</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Testimonial</ListItem>
                <ListItem>Programming</ListItem>
                <ListItem>User Stories</ListItem>
            </UnorderedList>
        </Flex>

        <Text marginTop="80px" fontWeight="400">
        Copyright ©2023 All rights reserved | This template is made with 💙 by Colorlib
        </Text>
       
    </Box>
  )
}

export default Footer