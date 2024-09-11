import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'

export default function AffectationDon() {
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
            <FormControl id="Id_don" isRequired>
              <FormLabel>ID du don</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Id_b" isRequired>
              <FormLabel>ID du bénificiaire</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Description' />
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
                Affecter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}