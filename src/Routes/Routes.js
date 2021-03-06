import { v4 as uuidv4 } from 'uuid';
import CreateMenu from '../Pages/CreateMenu/CreateMenu';

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import RecipeDetail from '../Pages/RecipeDetail/RecipeDetail';

export const publicRoutes = [
  {
    id: uuidv4(),
    path: '/public/login',
    component: <Login />,
  },
];
export const privateRoutes = [
  {
    id: uuidv4(),
    path: '/',
    component: <Home />,
  },
  {
    id: uuidv4(),
    path: '/createmenu',
    component: <CreateMenu />,
  },
  {
    id: uuidv4(),
    path: '/recipe/:id',
    component: <RecipeDetail />,
  },
];
