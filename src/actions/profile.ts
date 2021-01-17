import { AxiosResponse } from 'axios';
import { getProfile, updateProfile } from '../apis/profile';
import { AppThunk } from '../reducers';

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export interface ProfileAction {
  type: typeof SET_PROFILE_DATA;
  payload: object;
}

type ProfileAPIResponse = Promise<
  AxiosResponse<any> & { error_message: string; message: string; data: any }
>;

const setProfileData = (): AppThunk<ProfileAPIResponse> => (dispatch) => {
  return getProfile().then((res) => {
    if (res.data.status) {
      dispatch(profileDataAction(res.data.data.user));
    }
    return res.data;
  });
};

const updateProfileData = (
  id: number,
  body: { first_name: string; last_name: string },
): AppThunk<ProfileAPIResponse> => (dispatch) => {
  return updateProfile(id, body).then((res) => {
    if (res.data.status) {
      dispatch(profileDataAction(res.data.data.user));
    }
    return res.data;
  });
};

const profileDataAction = (profile: object) => ({
  type: SET_PROFILE_DATA,
  payload: profile,
});

export { setProfileData, updateProfileData, SET_PROFILE_DATA };
