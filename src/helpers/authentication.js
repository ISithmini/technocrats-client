import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const checkAccess = (code) => {
  
  let token = Cookie.get('regdata');
  let canAccess = false;
  
  if (token) {
    let user = jwt_decode(token);
    let permissions = user.role.permissions
    if (user && permissions.length) {
      permissions.forEach(permission => {
        if (permission === code) {
          canAccess = true;
        }
      });
    } else {
      return canAccess;
    }
  } else {
    return canAccess;
  }
  return canAccess;
}