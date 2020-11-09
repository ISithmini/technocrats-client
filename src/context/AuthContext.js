import React, { createContext, useReducer, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Cookie from 'js-cookie';
import { checkAccess } from '../helpers/authentication';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'GET_USER':
        let token = jwt_decode(Cookie.get('regdata'));
        return {
          id: token.id,
          name: token.name,
          role: token.role
        }
      case 'REMOVE_USER':
        return action.user
      default:
        return token
    }
  }

  const [user, dispatch] = useReducer(userReducer,'', () => {
    let token = Cookie.get('regdata');
    if (token) {
      let user = jwt_decode(token);
      return {
        id: user.id,
        name: user.name,
        role: user.role
      } 
    } else 
    return '';
    
  });
  return (
    <AuthContext.Provider value={{user, dispatch}} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
