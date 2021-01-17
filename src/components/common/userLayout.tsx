import React from 'react';
import { Location } from 'history';
import { Sidebar, Header, Footer, FullScreenLoader } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/index.scss';
import '../../styles/appStyle.scss';

interface UserLayoutProps {
  loaderCount: number;
  component: React.ComponentType<any> | React.FunctionComponent<any>;
  location: Location;
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const { loaderCount, component: Component, ...rest } = props;
  return (
    <>
      <Sidebar {...rest} />
      <Header {...rest} />
      <main>
        <Component {...rest} />
      </main>
      {loaderCount > 0 && <FullScreenLoader />}
      <Footer />
    </>
  );
};
export default UserLayout;
