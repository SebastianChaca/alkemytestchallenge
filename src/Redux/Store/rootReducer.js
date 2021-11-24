import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../Reducers/cartReducer';
import userReducer from '../Reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
