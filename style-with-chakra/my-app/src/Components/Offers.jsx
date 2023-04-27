import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    VStack,
    Grid,Divider,
    
  } from '@chakra-ui/react';
  const images=[{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",

   
  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png",

    

  },{
    img1:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png",

   
  }]
const Offers = () => {
  return (
    <Box p="20px" margin="auto" marginTop="30px" backgroundColor="#FED7D7">
        <Box textAlign="center">
        <Text fontSize="40px" color="#423F8D" fontWeight="400">Classes We Offer</Text>
        <Text color="#423F8D" fontSize="18px">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide</Text>
        <Text color="#423F8D" fontSize="18px">our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
    </Box>
    <Grid templateColumns="repeat(3,1fr)" gap="40px">{
        images.map(({img1})=>{

            return <Box borderRadius="30px" marginTop="30px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" backgroundColor="white" padding="20px">

                <Image src={img1}/>



                <Flex padding="10px" flexDirection="column" rowGap="10px">

                    <Text fontSize="20px" fontWeight="500">Intelligent Challenge

                    </Text>

                    <Text width="300px">The words you use in your written</Text>
                    <Text width="300px">communica speak volumes.</Text>

                    <Divider orientation='horizontal'/>
                    <Flex justifyContent="space-between">
                        <Box>
                            <Text color="#ED078B" fontWeight="500">3-5</Text>
                            <Text>Age Group</Text>
                        </Box>

                        <Box>
                            <Text color="#FBCE0F" fontWeight="500">30</Text>
                            <Text> Classes</Text>
                        </Box>

                        <Box>
                            <Text color="#1F97D4" fontWeight="500">10/h</Text>
                            <Text>Class Price</Text>
                        </Box>
                    </Flex>

                </Flex>
            </Box>
        })
    }

    </Grid>

    
    </Box>
  )
}

export default Offers