import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p="20px"
      bg="#2E4C6D"
      color="white"
      m="0px"
      justifyContent="space-between"
      alignItems="center"
    >
      Hola desde nav
      <Link to="/createmenu">Crear Menú</Link>
      <Button color="black">Login</Button>
    </Flex>
  );
};

export default Navbar;
