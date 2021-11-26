export const GET_RECIPIES = 'GET_RECIPIES';

export const setSearchedRecipies = recipies => ({
  type: GET_RECIPIES,
  payload: recipies,
});
