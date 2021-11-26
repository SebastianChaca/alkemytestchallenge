import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <Box m="10px" bg="alkemy.form" textAlign="center">
      <Text>{recipe?.title}</Text>
      <Image boxSizing="100px" src={recipe?.image} />
    </Box>
  );
};

export default RecipeCard;
