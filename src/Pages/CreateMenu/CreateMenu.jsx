import { Flex, Box, Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import useFetch from '../../Hooks/useFetch';
import { setSearchedRecipies } from '../../Redux/Actions/searchedRecipiesActions';
import { spoonacular, apiKey } from '../../Utils/spoonacularUrl';
import RecipeGrid from '../../Components/RecipeGrid/RecipeGrid';
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';

const CreateMenu = () => {
  const { fetchData, loading } = useFetch();
  const [diet, setDiet] = useState(false);

  const getUrl = value => {
    if (diet) {
      return `${spoonacular}/recipes/complexSearch?query=${value}&diet=vegan&minCalories=0&number=15&addRecipeInformation=true&${apiKey}`;
    } else {
      return `${spoonacular}/recipes/complexSearch?query=${value}&minCalories=0&number=15&addRecipeInformation=true&${apiKey}`;
    }
  };

  return (
    <Box position="relative">
      <Flex w="100%" justifyContent="center" alignItems="center">
        <SearchBar
          fetchData={fetchData}
          url={getUrl}
          action={setSearchedRecipies}
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
      <RecipeGrid loading={loading} isChecked={diet} />
      <SidebarMenu />
    </Box>
  );
};

export default CreateMenu;
