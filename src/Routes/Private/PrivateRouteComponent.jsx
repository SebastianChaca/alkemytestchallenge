import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

const PrivateRouteComponent = ({ children, path }) => {
  const { token } = useSelector(state => state.user);

  return (
    <Route
      path={path}
      render={() => {
        return token ? children : <Redirect to="/login"></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRouteComponent;
