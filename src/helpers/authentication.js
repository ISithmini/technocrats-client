import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const checkAccess = ({ resource, permission }) => {
  
  let token = Cookie.get('regdata');
  let canAccess = false;
  
  if (token) {
    let user = jwt_decode(token);
    let privileges = user.role.privileges;
    let resources = privileges.filter(privilege => {
      return privilege.resource === resource;
    })
    if (user && privileges.length && resources.length) {
      resources[0].permissions.forEach(rolePermission => {
        if ( rolePermission == permission) {
         canAccess = true
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