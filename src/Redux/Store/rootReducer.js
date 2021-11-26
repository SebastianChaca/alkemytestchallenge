import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer, searchedRecipiesReducer } from '../Reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  searchedRecipies: searchedRecipiesReducer,
});

export default persistReducer(persistConfig, rootReducer);
