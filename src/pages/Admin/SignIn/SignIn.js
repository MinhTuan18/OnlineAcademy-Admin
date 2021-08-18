import { AUTH_CHECK, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from 'admin-on-rest';
import axios from 'axios';
import { API_PORT } from '../../../utils/constants';
import { toast } from 'react-toastify';

const Auth =  (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    return axios.post(`${API_PORT}/admin/login`, { email: username, password })
      .then((response) => {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.data.accessToken);
      })
      .catch((err) => {
        toast.error(err.response.data.message);

        throw new Error(err.response.data.message);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  }
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  return Promise.reject();
};

export default Auth;