import {
  SET_RECIPE,
  GET_TOTALS,
  REMOVE_RECIPE,
  removeRecipe,
} from '../Actions/menuActions';
import {
  addRecipeToMenu,
  getTotals,
  removeItemFromCart,
} from '../Utils/menuUtils';

const INITIAL_STATE = {
  menu: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RECIPE:
      return {
        ...state,
        menu: addRecipeToMenu(state.menu, action.payload),
      };
    case GET_TOTALS:
      return {
        ...state,
        totals: getTotals(state.menu),
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        menu: removeItemFromCart(state.menu, action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
