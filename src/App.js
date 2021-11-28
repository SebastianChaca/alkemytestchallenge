import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './Theme/Theme';

import { store, persistor } from './Redux/Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Private, Public } from './Routes/Index';
import Navbar from './Components/NavBar/Navbar';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/public">
                <Public />
              </Route>
              <Route path="/">
                <Navbar />
                <SidebarMenu />
                <Private />
              </Route>
            </Switch>
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
