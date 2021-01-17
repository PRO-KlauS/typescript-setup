import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserLayout } from '../components';

interface UserRouterProps {
  loaderCount: number;
  component: React.ComponentType<any> | React.FunctionComponent<any>;
  isAuthenticated: string;
  path: string;
  exact: boolean;
}

const UserRoute: React.FC<UserRouterProps> = ({
  component: Component,
  loaderCount,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <UserLayout
            component={Component}
            loaderCount={loaderCount}
            {...props}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default UserRoute;
