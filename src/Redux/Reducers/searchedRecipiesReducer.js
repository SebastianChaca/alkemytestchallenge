import { GET_RECIPIES } from '../Actions/searchedRecipiesActions';

const INITIAL_STATE = {
  recipies: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RECIPIES:
      return { ...state, recipies: action.payload.results };
    default:
      return state;
  }
};

export default userReducer;
