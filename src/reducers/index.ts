import { Action, combineReducers } from 'redux';
import { LOGOUT, SET_USER_TOKEN } from '../actions/login';
import loginReducer from './login';
import loaderReducer from './loader';
import profileReducer from './profile';
import sidebarReducer from './sidebar';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface SidebarState {
  isCollapsed: boolean;
  isVisible: boolean;
}

export interface User {
  first_name?: string;
  last_name?: string;
  is_admin?: boolean;
}

export interface State {
  token: string;
  loaderCount: number;
  profile: User;
  sidebar: SidebarState;
}

export type AppThunk<R = void> = ThunkAction<R, State, unknown, Action<string>>;

export type ThunkDispatchType = ThunkDispatch<State, any, Action<string>>;

const initialState = {
  token: '',
  loaderCount: 0,
  profile: {},
  sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  token: loginReducer,
  loaderCount: loaderReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
});

const rootReducer = (state: State, action: any) => {
  let newState = state;
  if (
    action.type === LOGOUT ||
    (action.type !== SET_USER_TOKEN && !localStorage.getItem('TOKEN'))
  ) {
    newState = initialState;
  }
  return appReducer(newState, action);
};

export default rootReducer;
