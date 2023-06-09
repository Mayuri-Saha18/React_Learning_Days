import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
   
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  
  
    const shadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";
  
  export default function Navbar() {
    // const navigate = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();
  
  
    const handleClick = () =>{
        // navigate("/")
    }
                                         
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'white.900')} px={4} shadow={shadow} >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Link to="/">
            <Box onClick = {handleClick}><h1 style={{fontSize:"50px"}}>MusicApp</h1></Box>
            </Link>
          
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.githubusercontent.com/u/105915693?v=4'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.githubusercontent.com/u/105915693?v=4'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <h1>Mayuri Saha</h1>
                    </Center>
                    <br />
                   
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }