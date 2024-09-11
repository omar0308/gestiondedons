
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td,Box, TableContainer} from '@chakra-ui/react'

function DataTable() {
  return (
    <Box pl="20px" backgroundColor="aliceblue">
      <TableContainer bg="white" borderRadius="20px" position="absolute" top="20%" left="28%" w="55%" justify="center" mx="auto">
        <Table size='lg'>
            <Thead>
                <Tr>
                    <Th>Nom du client</Th>
                    <Th>Type de client</Th>
                    <Th>Type de don</Th>
                    <Th>Id_bénificiare</Th>
                    <Th>Date</Th>
                    <Th isNumeric>Valeur</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
                <Tr>
                    <Td>Flen Fouleni</Td>
                    <Td>Bénificiaire</Td>
                    <Td>espèce</Td>
                    <Td>2435</Td>
                    <Td>01-08-2024</Td>
                    <Td isNumeric>19</Td>
                </Tr>
            </Tbody>
        </Table>
      </TableContainer>
    </Box>
    
  )
}


export default DataTable