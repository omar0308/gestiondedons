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

export default function AjoutBenificiaire() {
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
            <FormControl id="firstName" display="flex" >
              <FormLabel flex="1" mt="2" >Famille:</FormLabel>
              <Select flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="1" mt="2" >Prenom:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="1" mt="2" >Nom:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="1" mt="2" >Etat civil:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="3" mt="2" >Situation Parentale:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" >
              <FormLabel flex="3" mt="2" >Nombre d'enfants:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" isRequired >
              <FormLabel flex="2" mt="2" >Telephone:</FormLabel>
              <Input flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" >
              <FormLabel flex="2" mt="2" >Eleve/Etudiant:</FormLabel>
              <Select flex="3" type="text" />
            </FormControl>
            <FormControl id="firstName" display="flex" >
              <FormLabel flex="2" mt="2" >Derniere moyenne:</FormLabel>
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