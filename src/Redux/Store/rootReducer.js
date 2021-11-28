import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer, searchedRecipesReducer, menuReducer } from '../Reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'menu'],
};

const rootReducer = combineReducers({
  user: userReducer,
  searchedRecipes: searchedRecipesReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
