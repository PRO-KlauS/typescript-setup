import { AxiosResponse } from 'axios';
import { login } from '../apis/login';
import { AppThunk } from '../reducers';
import { saveToken } from '../utility/common';

const SET_USER_TOKEN = 'SET_USER_TOKEN';
const LOGOUT = 'LOGOUT';

export interface LoginAction {
  type: typeof SET_USER_TOKEN | typeof LOGOUT;
  payload: string;
}

type LoginAPIResponse = Promise<
  AxiosResponse<any> & { error_message: string; message: string; data: any }
>;

const setUserToken = (body: {
  email: string;
  password: string;
}): AppThunk<LoginAPIResponse> => (dispatch) => {
  return login(body).then((res) => {
    if (res.data.status === true) {
      let token = 'Bearer ' + res.data.data.access_token;
      saveToken(token);
      dispatch({
        type: SET_USER_TOKEN,
        payload: token,
      });
    }
    return res.data;
  });
};

const logout = (): AppThunk => {
  return (dispatch) => {
    dispatch({ type: LOGOUT, payload: {} });
  };
};

export { setUserToken, logout, SET_USER_TOKEN, LOGOUT };
