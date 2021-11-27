import { useEffect } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { truncate } from '../../Utils/truncate';
import { removeRecipe, getTotals } from '../../Redux/Actions/menuActions';
const SidebarMenu = () => {
  const { menu } = useSelector(state => state.menu);
  const dispatch = useDispatch();
  const handleRemove = id => {
    dispatch(removeRecipe(id));
  };
  useEffect(() => {
    if (menu.length > 0) {
      dispatch(getTotals());
    }
  }, [menu, dispatch]);
  return (
    <Box
      bg="alkemy.form"
      w="250px"
      p="15px"
      m="10px"
      position="fixed"
      top="150px"
      borderRadius="10px"
    >
      {menu.length > 0 ? (
        menu.map(menuItem => {
          return (
            <Flex alignItems="center" justifyContent="space-between" w="100%">
              <Text textStyle="captionSemiBold">
                {truncate(menuItem.title)}
              </Text>
              <Button
                bg="alkemy.error"
                color="alkemy.form"
                size="sm"
                p="0px"
                onClick={() => handleRemove(menuItem.id)}
                my="5px"
              >
                <AiOutlineDelete />
              </Button>
            </Flex>
          );
        })
      ) : (
        <Text textStyle="captionSemiBold">No hay platos seleccionados</Text>
      )}
    </Box>
  );
};

export default SidebarMenu;
