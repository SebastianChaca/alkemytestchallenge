import { Flex, Box, Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import useFetch from '../../Hooks/useFetch';
import { setSearchedRecipies } from '../../Redux/Actions/searchedRecipiesActions';
import { spoonacular, apiKey } from '../../Utils/spoonacularUrl';
import RecipeGrid from './RecipeGrid';

const CreateMenu = () => {
  const { fetchData, loading } = useFetch();
  const [diet, setDiet] = useState(false);
  const getUrl = value => {
    if (diet) {
      return `${spoonacular}/recipes/complexSearch?query=${value}&diet=vegetarian&minCalories=0&number=15&${apiKey}`;
    } else {
      return `${spoonacular}/recipes/complexSearch?query=${value}&minCalories=0&number=15&${apiKey}`;
    }
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
        <Checkbox
          mx="10px"
          isChecked={diet}
          onChange={e => setDiet(e.target.checked)}
        />
        <Text>Vegetariano</Text>
      </Flex>
      <RecipeGrid loading={loading} isChecked={diet} />
    </Box>
  );
};

export default CreateMenu;
