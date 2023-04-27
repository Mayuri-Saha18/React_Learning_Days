import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Grid,
    VStack,
    
  } from '@chakra-ui/react';
  const images=[{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",

    line1:"Mr. Jacson Clay",
    line2:"Sports Instructor"
    
  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",

    line1:"Buster Hyman",
    line2:"Sports Instructor"

  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",

    line1:"Buster Hyman",
    line2:"Sports Instructor"
  },

  {
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",

    line1:"Amilia Kauly",
    line2:"Sports Instructor"
  }]

const Teachers = () => {
  return (
    <Box p="20px" margin="auto" marginTop="30px" >
        <Box textAlign="center">
        <Text fontSize="40px" color="#423F8D" fontWeight="400">Expert Teachers</Text>
        <Text color="#423F8D" fontSize="18px">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide</Text>
        <Text color="#423F8D" fontSize="18px">our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
    </Box>

    <Grid templateColumns="repeat(4,1fr)" gap="40px">{
        images.map(({img1,line1,line2},index)=>{

            return <Box marginTop="20px" borderRadius="30px" textAlign="center" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" backgroundColor="white" padding="20px">

                <Image src={img1}/>



                <VStack marginTop="20px">
                    <Text fontWeight="900">{line1}</Text>
                    <Text>{line2}</Text>
                </VStack>
            </Box>
        })
    }

    </Grid>

    </Box>
  )
}

export default Teachers