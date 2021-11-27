import { SET_RECIPE } from '../Actions/menuActions';

const INITIAL_STATE = {
  menu: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RECIPE:
      return {
        ...state,
        menu: [...state.menu, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
