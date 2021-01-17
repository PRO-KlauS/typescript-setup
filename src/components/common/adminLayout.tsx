import React from 'react';
import { Location } from 'history';
import { Sidebar, Header, Footer, FullScreenLoader } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/index.scss';
import '../../styles/appStyle.scss';

interface Props {
  loaderCount: number;
  component: React.ComponentType<any> | React.FunctionComponent<any>;
  location: Location;
}

const AdminLayout: React.FC<Props> = (props) => {
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
export default AdminLayout;
