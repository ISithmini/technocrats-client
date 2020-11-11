import { api } from '../api';

export const getPermissions = () => {
  return api.get('/permission/all_permissions');
} 