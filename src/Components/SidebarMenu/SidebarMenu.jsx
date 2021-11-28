import { useEffect } from 'react';
import { Box, Flex, Text, Button, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { truncate } from '../../Utils/truncate';
import {
  removeRecipe,
  getTotals,
  removeAll,
  createMenu,
} from '../../Redux/Actions/menuActions';
import { useHistory } from 'react-router-dom';
import Listitem from '../ListItem/Listitem';
const SidebarMenu = () => {
  const toast = useToast();
  const history = useHistory();
  const { menu, totals, menuIsFinished } = useSelector(state => state.menu);
  const { healthScore, price, minutes, calories, items } = totals;
  const isVegan = menu.filter(item => item.vegan);

  const dispatch = useDispatch();
  const handleRemove = id => {
    dispatch(removeRecipe(id));
  };
  const handleCreateMenu = () => {
    if (items < 4) {
      toast({
        title: '¡ Atencion !',
        description: 'Debes elejir al menos 4 platos',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (isVegan.length < 2) {
      toast({
        title: '¡ Atencion !',
        description: 'Al menos dos platos deben ser vegenos',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    dispatch(createMenu());
    history.push('/');
    toast({
      title: '¡ Exito !',
      description: 'Su menú se creó con éxito',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
  const handleRemoveAll = () => {
    dispatch(removeAll());
    toast({
      title: '¡ Atencion !',
      description: 'Se eliminaron todos los platos',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
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
      left="20px"
      borderRadius="10px"
      boxShadow="2xl"
      zIndex={1000}
    >
      {menu.length > 0 ? (
        menu.map(menuItem => {
          return (
            <div key={menuItem.id}>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                w="100%"
                mb="10px"
              >
                <Text textStyle="captionSemiBold">
                  {truncate(menuItem.title)}
                </Text>
                <Button
                  bg="alkemy.error"
                  color="alkemy.form"
                  size="sm"
                  p="0px"
                  onClick={() => handleRemove(menuItem.id)}
                  my="3px"
                >
                  <AiOutlineDelete />
                </Button>
              </Flex>
            </div>
          );
        })
      ) : (
        <Text textStyle="captionSemiBold">No hay platos seleccionados</Text>
      )}
      {menu.length > 0 && (
        <>
          <Listitem
            title="Calorias totales "
            item={parseFloat(calories).toFixed(2)}
            caption
            calories
          />
          <Listitem
            title="Precio total"
            item={parseFloat(price).toFixed(2)}
            caption
            price
          />
          <Listitem title="Promedio de minutos" item={minutes} caption />
          <Listitem
            title="Promedio de Health score"
            item={healthScore}
            caption
          />
          {!menuIsFinished && (
            <Button
              bg="alkemy.primary"
              color="alkemy.form"
              onClick={() => handleCreateMenu()}
              w="100%"
              size="sm"
              mt="10px"
            >
              Crear Menú
            </Button>
          )}
          <Button
            variant="outline"
            borderColor="alkemy.primary"
            color="alkemy.primary"
            w="100%"
            size="sm"
            mt="10px"
            onClick={() => handleRemoveAll()}
          >
            {menuIsFinished ? 'Eliminar menú' : 'Eliminar todos'}
          </Button>
        </>
      )}
    </Box>
  );
};

export default SidebarMenu;
