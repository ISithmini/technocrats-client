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