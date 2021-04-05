import { api } from '../api';


export const signUp = ({ name, email, password, location, contactNo }) => {
  //let email = email? email: '';

  return api.post('/user/signup', { name, email, password, location, contactNo });
}

export const logIn = ({ email, password }) => {
  return api.post('/user/login', { email, password });
}

export const logOut = () => {
  return api.get('/user/logout');
} 

export const getUser = ({_id}) => {
  return api.get('/user/basic-details', {
    params: {
      _id: _id,
    }
  });
}

export const getSavedPosts = ({_id}) => {
    console.log(_id);
    return api.get('/user/saved-posts', {
      params: {
        _id: _id,
      }
    });
}

export const editProfile = ({name, email, location,contactNo}) => {
    return api.post('/user/editaccount', {name, email, location,contactNo})
}