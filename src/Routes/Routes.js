import { v4 as uuidv4 } from 'uuid';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

export const publicRoutes = [
  {
    id: uuidv4(),
    path: '/login',
    component: <Login />,
  },
];
export const privateRoutes = [
  {
    id: uuidv4(),
    path: '/',
    component: <Home />,
  },
];
