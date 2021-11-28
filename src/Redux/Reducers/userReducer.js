import {
  SET_CURRENT_USER,
  START_FETCHING_USER,
  SIGN_OUT,
} from '../Actions/userActions';

const INITIAL_STATE = {
  token: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return { ...state, loading: true };
    case SET_CURRENT_USER:
      return {
        ...state,
        token: action.payload.jwt,
        loading: false,
      };
    case SIGN_OUT:
      return { token: null, loading: false };
    default:
      return state;
  }
};

export default userReducer;
