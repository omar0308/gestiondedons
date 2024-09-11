import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Benificiaires from './Benificiaires'
import Ajout from './Ajout'
import Parametres from './Parametres'
import LoginPage from './LoginPage'
import { ChakraProvider } from '@chakra-ui/react'




function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/benificiaires" element={<Benificiaires />} />
          <Route path="/ajout" element={<Ajout />} />
          <Route path="/parametres" element={<Parametres />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  );
}

export default App;
