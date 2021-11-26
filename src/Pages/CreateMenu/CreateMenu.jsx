import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import useFetch from '../../Hooks/useFetch';
import { setSearchedRecipies } from '../../Redux/Actions/searchedRecipiesActions';
import { spoonacular, apiKey } from '../../Utils/spoonacularUrl';
import RecipeGrid from './RecipeGrid';

const CreateMenu = () => {
  const { fetchData, loading } = useFetch();
  const getUrl = value => {
    return `${spoonacular}/recipes/complexSearch?query=${value}&minCalories=0&number=15&${apiKey}`;
  };

  return (
    <Box>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <SearchBar
          fetchData={fetchData}
          url={getUrl}
          action={setSearchedRecipies}
          loading={loading}
        />
      </Flex>
      <RecipeGrid loading={loading} />
    </Box>
  );
};

export default CreateMenu;
