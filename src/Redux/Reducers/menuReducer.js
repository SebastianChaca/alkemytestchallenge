import {
  SET_RECIPE,
  GET_TOTALS,
  REMOVE_RECIPE,
  REMOVE_ALL,
  CREATE_MENU,
} from '../Actions/menuActions';
import {
  addRecipeToMenu,
  getTotals,
  removeItemFromCart,
} from '../Utils/menuUtils';

const INITIAL_STATE = {
  menu: [],
  totals: { healthScore: 0, price: 0, minutes: 0, calories: 0, items: 0 },
  menuIsFinished: false,
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
    case REMOVE_ALL: {
      return INITIAL_STATE;
    }
    case CREATE_MENU: {
      return { ...state, menuIsFinished: true };
    }
    default:
      return state;
  }
};

export default userReducer;
