import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    VStack,
    
  } from '@chakra-ui/react';

  const images=[{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg",

    line1:"Inter School Sports",
    line2:"The words you use in your written",
    line3:"communica speak volumes.",
    color: "#1F97D4"
  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg",

    line1:"Friendly Environment",
    line2:"The words you use in your written",
    line3:"communica speak volumes.",
    color: "#FBCE0F"

  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg",

    line1:"Multimedia Class",
    line2:"The words you use in your written",
    line3:"communica speak volumes.",
    color: "#12D9DF"
  }]

const Welcome = () => {
  return (

    <Box p="10px" margin="auto" marginTop="30px">

    <Box textAlign="center">
        <Text fontSize="40px" color="#423F8D">Welcome to our <Text as="span" color="#ED078B">Kindergarten</Text></Text>
        <Text color="#423F8D" fontSize="16px">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving</Text>
        <Text color="#423F8D" fontSize="16px">today. Moving in fourth air night bring upon lesser subdue fowl male signs.</Text>
    </Box>

    <Flex justifyContent="space-around" alignItems="center" margin="auto" marginTop="50px" width="80%">

        <VStack width="400px" gridRow="30px">

            {
                images.map(({
                    img1,line1,line2,line3,color},index)=>{

                        return <Flex key={index} justify="space-between" width="100%">

                            <Image src={img1}/>

                            <Box>

                                <Text color={color} fontSize="20px">{line1}</Text>
                                <Text>{line2}</Text>
                                <Text>{line3}</Text>
                            </Box>

                        </Flex>
                    })
            }



        </VStack>

        <Box width="80%" >

            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"/>
        </Box>
    </Flex>

    </Box>
  )
}

export default Welcome