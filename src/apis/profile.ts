import { get, put, post } from './client';

const getProfile = () => {
  return get('user/me');
};

const updateProfile = (id: number, body: any) => {
  return put(`user/profileupdate/${id}`, body);
};

const changePassword = (id: number, body: any) => {
  return post(`user/passwordchange/${id}`, body);
};

export { getProfile, updateProfile, changePassword };
