import { Image, Text, Flex, Button, Box } from '@chakra-ui/react';
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
        <Flex justifyContent="left" alignItems="center" w="100%">
          <Text textStyle="semiBold" my="5px" w="250px" textAlign="left">
            Calorías :
          </Text>
          <Flex>
            <Text textStyle="regular" mr="3px">
              {recipe?.nutrition.nutrients[0].amount}{' '}
            </Text>
            <Text textStyle="regular" mr="3px">
              {recipe?.nutrition.nutrients[0].unit}
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="left" alignItems="left" w="100%">
          <Text textStyle="semiBold" my="5px" w="250px" textAlign="left">
            Precio:
          </Text>
          <Text textStyle="regular" mr="3px">
            ${recipe?.pricePerServing}
          </Text>
        </Flex>
        <Flex justifyContent="left" alignItems="left" w="100%">
          <Text textStyle="semiBold" my="5px" w="250px" textAlign="left">
            Minutos de preparación :
          </Text>
          <Text textStyle="regular" mr="3px">
            {recipe?.readyInMinutes}
          </Text>
        </Flex>
        <Flex justifyContent="left" alignItems="left" w="100%">
          <Text textStyle="semiBold" my="5px" w="250px" textAlign="left">
            Health score :
          </Text>
          <Text textStyle="regular" mr="3px">
            {recipe?.healthScore}
          </Text>
        </Flex>
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
