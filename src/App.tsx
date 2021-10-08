import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/theme';
import { Router } from './components/router/Router';

export default function App() {
  return (
   <ChakraProvider theme={theme}>
     <BrowserRouter>
     <Router />
     </BrowserRouter>
   </ChakraProvider>
  );
}
