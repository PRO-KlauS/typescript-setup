import { AppThunk } from '../reducers';

const SET_SIDEBAR_COLLAPSE = 'SET_SIDEBAR_COLLAPSE';
const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export interface SidebarAction {
  type: typeof SET_SIDEBAR_COLLAPSE | typeof SET_SIDEBAR_VISIBILITY;
  payload: { isCollapsed: boolean; isVisible: boolean };
}

const setSidebarCollapse = (isCollapsed: boolean): AppThunk => (
  dispatch,
  getState,
) => {
  dispatch({
    type: SET_SIDEBAR_COLLAPSE,
    payload: {
      isCollapsed: isCollapsed,
      isVisible: getState().sidebar.isVisible,
    },
  });
};

const setSidebarVisibility = (isVisible: boolean): AppThunk => (
  dispatch,
  getState,
) => {
  dispatch({
    type: SET_SIDEBAR_VISIBILITY,
    payload: {
      isCollapsed: getState().sidebar.isCollapsed,
      isVisible: isVisible,
    },
  });
};

export {
  setSidebarCollapse,
  setSidebarVisibility,
  SET_SIDEBAR_COLLAPSE,
  SET_SIDEBAR_VISIBILITY,
};
