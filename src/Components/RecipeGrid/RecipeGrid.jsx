import { Flex, Grid, Spinner, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeGrid = ({ loading, isChecked }) => {
  const { recipies } = useSelector(state => state.searchedRecipies);
  if (loading) {
    return (
      <Flex w="100%" justifyContent="center" mt="50px">
        <Spinner />
      </Flex>
    );
  }
  if (recipies.length <= 0) {
    return (
      <Flex w="100%" justifyContent="center" mt="50px">
        <Text textStyle="title"> No hay platos disponibles</Text>
      </Flex>
    );
  }
  return (
    <Flex mr="120px">
      <Grid
        w="100%"
        templateColumns="repeat(2, 420px)"
        justifyContent="right"
        m="20px"
      >
        {recipies.length > 0 &&
          recipies.slice(0, 4).map(r => {
            return <RecipeCard recipe={r} key={r.id} isChecked={isChecked} />;
          })}
      </Grid>
    </Flex>
  );
};

export default RecipeGrid;
