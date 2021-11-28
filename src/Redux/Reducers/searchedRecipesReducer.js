import { GET_RECIPES } from '../Actions/searchedRecipesActions';

const INITIAL_STATE = {
  recipes: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload.results };
    default:
      return state;
  }
};

export default userReducer;
