import { Flex, Grid, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';

const RecipeGrid = ({ loading, isChecked }) => {
  const { recipies } = useSelector(state => state.searchedRecipies);
  if (loading) {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  }
  if (!recipies) {
    return <h1>No hay nada</h1>;
  }
  return (
    <Grid
      w="100%"
      templateColumns="repeat(2, 430px)"
      justifyContent="center"
      m="20px"
    >
      {recipies &&
        recipies.slice(0, 4).map(r => {
          return <RecipeCard recipe={r} key={r.id} isChecked={isChecked} />;
        })}
    </Grid>
  );
};

export default RecipeGrid;
