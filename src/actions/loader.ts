import { AppThunk } from '../reducers';

const SET_LOADER_COUNT = 'SET_LOADER_COUNT';

export interface LoaderAction {
  type: typeof SET_LOADER_COUNT;
  payload: number;
}

const setReduxLoaderCount = (count: number) => {
  return { type: SET_LOADER_COUNT, payload: count };
};

const incrementLoaderCount = (): AppThunk => (dispatch, getState) => {
  let loaderCount = getState().loaderCount;
  dispatch({
    type: SET_LOADER_COUNT,
    payload: loaderCount + 1,
  });
};

const decrementLoaderCount = (): AppThunk => (dispatch, getState) => {
  let loaderCount = getState().loaderCount;
  dispatch({
    type: SET_LOADER_COUNT,
    payload: loaderCount ? loaderCount - 1 : 0,
  });
};

export {
  setReduxLoaderCount,
  SET_LOADER_COUNT,
  incrementLoaderCount,
  decrementLoaderCount,
};
