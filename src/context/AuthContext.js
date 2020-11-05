import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        console.log('HERE');
        return {
          id: action.user.id,
          name: action.user.name,
          role: action.user.role,
          privileges: action.user.privileges
        }
      case 'REMOVE_USER':
        return ''
      default:
        return state
    }
  }

  const [user, dispatch] = useReducer(userReducer, 'hello');
  console.log(user);

  return (
    <AuthContext.Provider value={{user, dispatch}} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
