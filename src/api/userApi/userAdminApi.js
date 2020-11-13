import { api } from '../api';

export const findUserAdm = ({ email, contactNo }) => {
  if ( email ) {
    return api.get('/adm_user/find_user', {
      params: {
        email: email
      }
    })
  } else {
    return api.get('/adm_user/find_user', {
      params: {
        contactNo: contactNo
      }
    })
  }
}

export const editUserByAdmin = ({ _id, role, isDissable, verifyStatus }) => {
  return api.patch('/adm_user/editByAdmin', { _id, role, isDissable, verifyStatus });
}

export const deleteUserByAdmin = ({ _id }) => {
  return api.delete('/adm_user/deleteByAdmin', {
    params: {
      _id: _id
    }
  });
}