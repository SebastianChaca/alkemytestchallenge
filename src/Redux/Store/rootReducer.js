import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer, searchedRecipiesReducer, menuReducer } from '../Reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  searchedRecipies: searchedRecipiesReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
