import { Flex, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singOut } from '../../Redux/Actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(singOut());
  };
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
      Alkemy
      <Flex>
        <Link to="/">
          <Text textStyle="subtitle" mr="25px">
            Menú
          </Text>
        </Link>
        <Link to="/createmenu">
          <Text textStyle="subtitle">Crear Menú</Text>
        </Link>
      </Flex>
      <Button color="black" onClick={() => handleClick()}>
        Salir
      </Button>
    </Flex>
  );
};

export default Navbar;
