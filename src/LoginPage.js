import Login from './Login';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'


  
function LoginPage() {
  return (
      
        <Flex direction="row" alignItems="center" justify="center" bg="#3A68F1" h="100vh">
          <Box display="flex"
            flexDirection="column"
            rowGap="20px"
            justifyContent="center"
            alignItems="center"
            bg="#f7fafc"
            width="30%"
            height="60vh"
            borderLeftRadius="15px"
          >
          

            <Box bg="">
              <Login></Login>
            </Box>
          </Box>
          <Box width="35%" height="60vh" borderRightRadius="10px">
            <Image src={`${process.env.PUBLIC_URL}/login/login.avif`} objectFit="cover" w="100%" h="100%" borderRightRadius="15px" />
            <Image src={`${process.env.PUBLIC_URL}/login/login2.png`} position="relative" bottom="85%" right="10%" />
          </Box>
        </Flex>
      
      
    
  )
}



export default LoginPage