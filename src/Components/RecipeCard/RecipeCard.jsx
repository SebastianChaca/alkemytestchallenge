import { Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const RecipeCard = ({ recipe }) => {
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
    >
      <Text textStyle="subtitle" my="5px" w="250px" textAlign="center">
        {recipe?.title}
      </Text>
      <Image boxSize="200px" objectFit="contain" src={recipe?.image} m="auto" />
    </Flex>
  );
};

export default RecipeCard;
