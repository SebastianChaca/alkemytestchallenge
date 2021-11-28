import React from 'react';
import { Button } from '@chakra-ui/button';
import { setRecipe } from '../../Redux/Actions/menuActions';
import { useDispatch } from 'react-redux';

const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
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
