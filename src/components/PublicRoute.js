import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/authentication';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const loggedIn = useSelector(authSelectors.getIfLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        loggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
