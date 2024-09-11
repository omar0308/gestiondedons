
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar,faCircleUser,faPenToSquare,faSun,faArrowRightFromBracket,faMugHot,faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { Box, Avatar, Text, Wrap, WrapItem, UnorderedList, ListItem,Menu ,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Static({ u1={} , u2={} ,u3={} , u4={} }) {
  const navigate = useNavigate();
  const { c = 'white', bg = '#004bcd' } = u1;
  const { c1 = 'white', bg1 = '#004bcd' } = u2;
  const { c2 = 'white', bg2 = '#004bcd' } = u3;
  const { c3 = 'white', bg3 = '#004bcd' } = u4;
  const handleClick1 = () => {
   navigate('/dashboard');
  };
  const handleClick2 = () => {
   navigate('/benificiaires');
  };
  const handleClick3 = () => {
   navigate('/ajout');
  };
  const handleClick4 = () => {
   navigate('/parametres');
  };


  return (
    <>
      <Box display="flex" height="6vh" direction="row" >
        <Box zIndex="1" boxShadow='dark-lg' width="15%"  bg="#004bcd" display="flex" alignItems="center" justifyContent="center" >
          <Text color="white" fontWeight="600" width="60" textAlign="center" >Association de gestion des dons</Text>
        </Box>
        <Box boxShadow='dark-lg' display="flex" width="85%" bg="black" flexDirection="row-reverse" columnGap="10px" >
          <Menu>
            <MenuButton as={Button} backgroundColor="black" color="white" _hover={{ bg: 'black.400' }} fontWeight="700" mt="1vh" mr="2vh">
              Utilisateur 
            </MenuButton>
            <MenuList>
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
          <Wrap mt="0.5vh">
            <WrapItem>
              <Avatar>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              </Avatar>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Box display="flex" height="94vh" direction="row" >
        <Box bg='#004bcd' height="94vh" width="15%">
          <UnorderedList styleType="''" display="flex" flexDirection="column" m="0" rowGap="2vh">
            <ListItem display="flex" justifyContent="center" mt="4vh" mb="2vh" >
              <FontAwesomeIcon style={{ fontSize: '10vh', color: 'white' }} icon={faMugHot} />
            </ListItem>
            <ListItem onClick={handleClick1} color={c} bg={bg} _hover={{color:'#004bcd',bg:'white',cursor: 'pointer'}} >
              <Box ml="3vh" display="flex" flexDirection="row"  columnGap="20px" pt="1vh" pb="1vh"   >
                <FontAwesomeIcon icon={faChartBar} style={{ fontSize: '3vh' }} />
                <Text fontWeight="bold" fontSize="17px" mt="0.3vh" >Dashboard</Text>
              </Box>
            </ListItem>
            <ListItem onClick={handleClick2}  color={c1} bg={bg1} _hover={{color:'#004bcd',bg:'white',cursor: 'pointer'}}  >
              <Box ml="3vh" display="flex" flexDirection="row" columnGap="20px" pt="1vh" pb="1vh"  >
                <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '3vh' }} />
                <Text fontWeight="bold" fontSize="17px" mt="0.3vh" >Bénéficiaires</Text>
              </Box>
            </ListItem>
            <ListItem onClick={handleClick3} color={c2} bg={bg2} _hover={{color:'#004bcd',bg:'white',cursor: 'pointer'}} >
              <Box ml="3vh" display="flex" flexDirection="row" columnGap="20px" pt="1vh" pb="1vh"  >
                <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '3vh' }} />
                <Text fontWeight="bold" fontSize="17px" mt="0.3vh" >Ajout</Text>
              </Box>
            </ListItem>
            <ListItem onClick={handleClick4} color={c3} bg={bg3} _hover={{color:'#004bcd',bg:'white',cursor: 'pointer'}} >
              <Box ml="3vh" display="flex" flexDirection="row" columnGap="20px" pt="1vh" pb="1vh"  >
                <FontAwesomeIcon icon={faSun} style={{ fontSize: '3vh' }} />
                <Text fontWeight="bold" fontSize="17px" mt="0.3vh" >Parametres</Text>
              </Box>
            </ListItem>
            <ListItem color="white" _hover={{color:'#004bcd',bg:'white',cursor: 'pointer'}} >
              <Box ml="3vh" display="flex" flexDirection="row" columnGap="20px" pt="1vh" pb="1vh"  >
                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ fontSize: '3vh' }} />
                <Text fontWeight="bold" fontSize="17px" mt="0.3vh" >Log out</Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width="85%" bg="aliceblue">
          
        </Box>
      </Box>
      
    </>
    
  )
  
}

export default Static