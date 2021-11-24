import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { store, persistor } from './Redux/Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Private, Public } from './Routes/Index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router>
            <Public />
            <Private />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
