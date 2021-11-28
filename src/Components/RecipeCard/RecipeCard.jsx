import { Image, Text, Flex, Button, Box } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeStats from '../RecipeStats/RecipeStats';
import AddButton from '../AddButton/AddButton';

const RecipeCard = ({ recipe }) => {
  const history = useHistory();

  const handleDetail = () => {
    history.push(`/recipe/${recipe.id}`);
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
        <RecipeStats recipe={recipe} />
      </Box>
      <Button
        onClick={() => handleDetail()}
        color="alkemy.primary"
        variant="outline"
        size="sm"
        m="10px"
        w="100%"
      >
        Detalle
      </Button>
      <AddButton recipe={recipe} />
    </Flex>
  );
};

export default RecipeCard;
