import { Flex, Box, Checkbox, Text } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import useFetch from '../../Hooks/useFetch';
import { setSearchedRecipes } from '../../Redux/Actions/searchedRecipesActions';
import { spoonacular, apiKey } from '../../Utils/spoonacularUrl';
import RecipeGrid from '../../Components/RecipeGrid/RecipeGrid';

const CreateMenu = () => {
  const { fetchData, loading } = useFetch();
  const [diet, setDiet] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  const getUrl = value => {
    if (diet) {
      return `${spoonacular}/recipes/complexSearch?query=${value}&diet=vegan&minCalories=0&number=8&addRecipeInformation=true&${apiKey}`;
    } else {
      return `${spoonacular}/recipes/complexSearch?query=${value}&minCalories=0&number=8&addRecipeInformation=true&${apiKey}`;
    }
  };

  return (
    <Box position="relative" ref={ref}>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <SearchBar
          fetchData={fetchData}
          url={getUrl}
          action={setSearchedRecipes}
          loading={loading}
        />
        <Checkbox
          mx="10px"
          isChecked={diet}
          onChange={e => setDiet(e.target.checked)}
          borderColor="alkemy.primary"
          border="1px solid"
        />
        <Text>Vegan</Text>
      </Flex>
      <RecipeGrid loading={loading} type="recipes" />
    </Box>
  );
};

export default CreateMenu;
