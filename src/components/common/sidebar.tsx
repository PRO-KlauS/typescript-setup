import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import { Location } from 'history';
import {
  setSidebarCollapse,
  setSidebarVisibility,
} from '../../actions/sidebar';
import { getSidebarMenuClasses } from '../../utility/common';
import { constants } from '../../constants';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../styles/sidebar.scss';
import { State } from '../../reducers';

type SidebarProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    location: Location;
  };

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  profile,
  isVisible,
  setSidebarVisibility,
  location,
}) => {
  let sidebarMenuClasses = getSidebarMenuClasses(location.pathname);
  const closeSidebar = () => setSidebarVisibility(false);
  const { manageUsersPlaceholder, dashboardPlaceholder } = constants.sidebar;
  return (
    <ProSidebar
      collapsed={isCollapsed}
      breakPoint="lg"
      toggled={isVisible}
      onToggle={setSidebarVisibility}>
      <SidebarHeader>
        {isCollapsed ? (
          <img
            alt="Icon logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            height={40}
            width={60}
            style={{ marginLeft: 10 }}
          />
        ) : (
          <img
            alt="Logo"
            src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
            height={80}
            width={150}
          />
        )}
        <i className="fas fa-times close-sidebar" onClick={closeSidebar} />
      </SidebarHeader>
      <Menu iconShape="round">
        <MenuItem
          className={sidebarMenuClasses.dashboard}
          icon={<i className="fa fa-tachometer-alt" />}>
          <NavLink onClick={closeSidebar} to="/dashboard">
            {dashboardPlaceholder}
          </NavLink>
        </MenuItem>
        {profile.is_admin ? (
          <MenuItem
            className={sidebarMenuClasses.manageUsers}
            icon={<i className="fa fa-user-plus" />}>
            <NavLink onClick={closeSidebar} to="/manage-users">
              {manageUsersPlaceholder}
            </NavLink>
          </MenuItem>
        ) : (
          <></>
        )}
      </Menu>
    </ProSidebar>
  );
};

const mapStateToProps = (state: State) => ({
  isCollapsed: state.sidebar.isCollapsed,
  isVisible: state.sidebar.isVisible,
  profile: state.profile,
});

const mapDispatchToProps = () => ({ setSidebarCollapse, setSidebarVisibility });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
