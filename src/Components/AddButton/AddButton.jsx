import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { setRecipe } from '../../Redux/Actions/menuActions';
import { useDispatch, useSelector } from 'react-redux';

const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { menu } = useSelector(state => state.menu);
  const isSelected = menu.find(m => m.id === recipe.id);

  const handleClick = () => {
    if (isSelected) {
      toast({
        title: '¡ Atencion !',
        description: 'Ese plato ya se encuentra seleccionado',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    dispatch(setRecipe(recipe));
  };
  return (
    <Button
      onClick={() => handleClick()}
      color="alkemy.form"
      bg="alkemy.primary"
      size="sm"
      m="10px"
      w="100%"
    >
      Agregar
    </Button>
  );
};

export default AddButton;
