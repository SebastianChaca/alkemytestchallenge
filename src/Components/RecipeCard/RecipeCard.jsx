import { Image, Text, Flex, Button, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setRecipe } from '../../Redux/Actions/menuActions';
import Listitem from '../ListItem/Listitem';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRecipe(recipe));
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      m="20px"
      bg="alkemy.form"
      w="350px"
      px="40px"
      py="20px"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Text textStyle="subtitle" my="5px" w="250px" textAlign="center">
        {recipe?.title}
      </Text>
      <Image boxSize="200px" objectFit="contain" src={recipe?.image} />

      <Box w="90%">
        <Listitem
          title="Calorías"
          item={recipe?.nutrition.nutrients[0].amount}
          calories
        />
        <Listitem title="Precio" item={recipe?.pricePerServing} price />
        <Listitem
          title="Minutos de preparación"
          item={recipe?.readyInMinutes}
        />
        <Listitem title="Health score" item={recipe?.healthScore} />
      </Box>
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
    </Flex>
  );
};

export default RecipeCard;
