export const SET_RECIPE = 'SET_RECIPE';
export const GET_TOTALS = 'GET_TOTALS';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const REMOVE_ALL = 'REMOVE_ALL';
export const CREATE_MENU = 'CREATE_MENU';

export const setRecipe = recipe => ({
  type: SET_RECIPE,
  payload: recipe,
});
export const getTotals = () => ({
  type: GET_TOTALS,
});

export const removeRecipe = id => ({
  type: REMOVE_RECIPE,
  payload: id,
});
export const removeAll = () => ({
  type: REMOVE_ALL,
});
export const createMenu = () => ({
  type: CREATE_MENU,
});
