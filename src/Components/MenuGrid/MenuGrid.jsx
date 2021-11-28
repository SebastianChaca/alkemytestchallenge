import { Flex, Grid, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const MenuGrid = ({ loading, isChecked }) => {
  const { menu, menuIsFinished } = useSelector(state => state.menu);

  if (!menuIsFinished) {
    return (
      <Flex w="100%" justifyContent="center" mt="50px">
        <Text textStyle="title"> Todavía no creaste un menú</Text>
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
        {menu.length > 0 &&
          menu.map(r => {
            return <RecipeCard recipe={r} key={r.id} isChecked={isChecked} />;
          })}
      </Grid>
    </Flex>
  );
};

export default MenuGrid;
