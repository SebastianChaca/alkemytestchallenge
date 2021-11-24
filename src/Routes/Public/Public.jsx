import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { publicRoutes } from '../Routes';
const Public = () => {
  const { token } = useSelector(state => state.user);
  const mapRoutes = routes => {
    return routes.map(route => {
      if (route.path === '/login') {
        return (
          <Route key={route.id} exact path={route.path}>
            {token ? <Redirect to="/" /> : route.component}
          </Route>
        );
      } else {
        return (
          <Route key={route.id} exact path={route.path}>
            {route.component}
          </Route>
        );
      }
    });
  };

  return <Switch>{mapRoutes(publicRoutes)}</Switch>;
};
export default Public;
