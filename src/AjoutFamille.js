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

export default function AjoutFamille() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      w={'45vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderRadius="2vh"
      >
      <Stack py={10}   >
        <Box >
          <Stack spacing={3}>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="2" mt="2" >Nom de la famille:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="1" mt="2" >Addresse:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" >
              <FormLabel flex="3" mt="2" >Nombre de membres:</FormLabel>
              <Input flex="3" type="number" />
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
                Ajouter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}