import { api } from '../api';

//////////////////////////// GET ALL ROLE ////////////////////////////

export const getRoles = () => {
  return api.get('/role/getroles');
} 

//////////////////////////// CREATE A ROLE ////////////////////////////

export const createRole = ({ role }) => {
  return api.post('/role/add_role', { role });
}

//////////////////////////// ADD A PERMISSION CODE TO ROLE ////////////////////////////

export const addPermissionToRole = ({ role, code }) => {
  return api.patch('/role/add_permission_to_role', { role, code });
}

//////////////////////////// REMOVE A PERMISSION FROM ROLE ////////////////////////////

export const removePermissionFromRole = ({ role, code }) => {
  return api.patch('/role/remove_permission_from_role', { role, code });
}

