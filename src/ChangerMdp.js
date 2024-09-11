import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ChangerMdp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      w={'40vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderRadius="2vh"
      position="absolute"
      top="25%"
      left="45%"

      >
      <Stack py={10}   >
        <Box >
          <Stack spacing={4}>
            <FormControl id="oldpassword">
              <FormLabel>Ancien mot de passe : </FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="newpassword">
              <FormLabel>Nouveau mot de passe : </FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="newpassword">
              <FormLabel>Confirmation du nouveau mo de passe : </FormLabel>
              <Input type="password" />
            </FormControl>
            
            
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Confirmer
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}