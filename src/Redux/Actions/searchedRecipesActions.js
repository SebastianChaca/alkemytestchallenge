export const GET_RECIPES = 'GET_RECIPES';

export const setSearchedRecipes = recipes => ({
  type: GET_RECIPES,
  payload: recipes,
});
