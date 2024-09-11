import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Select
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Historyform() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      w={'40vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderRadius="2vh"

      >
      <Stack py={10}   >
        <Box >
          <Stack spacing={4}>
            <FormControl id="oldpassword">
              <FormLabel>Id : </FormLabel>
              <Input type="select" />
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
                Afficher l'historique
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}