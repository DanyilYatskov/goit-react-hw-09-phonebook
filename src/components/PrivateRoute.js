import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/authentication';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const loggedIn = useSelector(authSelectors.getIfLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
