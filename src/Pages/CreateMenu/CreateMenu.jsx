import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import useFetch from '../../Hooks/useFetch';
import { setSearchedRecipies } from '../../Redux/Actions/searchedRecipiesActions';
import { spoonacular, apiKey } from '../../Utils/spoonacularUrl';
import { useSelector } from 'react-redux';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
const CreateMenu = () => {
  const { fetchData, loading } = useFetch();
  const getUrl = value => {
    return `${spoonacular}/recipes/complexSearch?query=${value}&minCalories=0&number=15&${apiKey}`;
  };
  const { recipies } = useSelector(state => state.searchedRecipies);

  return (
    <Box>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Text>Buscar:</Text>
        <SearchBar
          fetchData={fetchData}
          url={getUrl}
          action={setSearchedRecipies}
          loading={loading}
        />
      </Flex>
      <Flex>
        {recipies ? (
          recipies.slice(0, 4).map(r => {
            return <RecipeCard recipe={r} key={r.id} />;
          })
        ) : (
          <h1>No hay nada</h1>
        )}
      </Flex>
    </Box>
  );
};

export default CreateMenu;
