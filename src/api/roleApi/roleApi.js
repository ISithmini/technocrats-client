import { api } from '../api';

export const getRole = () => {
  return api.get('/role/getroles');
}