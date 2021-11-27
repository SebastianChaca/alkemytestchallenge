import { Image, Text, Flex, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setRecipe } from '../../Redux/Actions/menuActions';

const RecipeCard = ({ recipe, isChecked }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const newRecipe = { ...recipe, vegetarian: isChecked };
    dispatch(setRecipe(newRecipe));
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      m="20px"
      bg="alkemy.form"
      w="400px"
      p="10px"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Text textStyle="subtitle" my="5px" w="250px" textAlign="center">
        {recipe?.title}
      </Text>
      <Image boxSize="200px" objectFit="contain" src={recipe?.image} />
      <Flex justifyContent="left" alignItems="center" w="100%">
        <Text textStyle="semiBold" my="5px" w="250px" textAlign="center">
          {recipe?.nutrition.nutrients[0].title} :
        </Text>
        <Text textStyle="regular" mr="3px">
          {recipe?.nutrition.nutrients[0].amount}{' '}
          {recipe?.nutrition.nutrients[0].unit}
        </Text>
      </Flex>
      <Button
        onClick={() => handleClick()}
        color="alkemy.form"
        bg="alkemy.primary"
        size="sm"
        m="10px"
      >
        Agregar
      </Button>
    </Flex>
  );
};

export default RecipeCard;
