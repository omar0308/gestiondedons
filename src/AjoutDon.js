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

export default function AjoutDon() {
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
            <FormControl id="firstName">
              <FormLabel>Nom du Donateur</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Id_b" isRequired>
              <FormLabel>ID du bénificiaire</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="type" isRequired>
              <FormLabel>Type de don</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="valeur" isRequired>
              <FormLabel>Valeur du don</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" />
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