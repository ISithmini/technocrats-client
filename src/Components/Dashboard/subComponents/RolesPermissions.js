import { addPermissionToRole, getRoles, removePermissionFromRole } from '../../../api/roleApi/roleApi';
import React, { useEffect, useState } from 'react';
import '../style/RightSideContent.scss'
import { getPermissions } from '../../../api/roleApi/permissionApi';
import closeIcon from '../../../assets/icons/closeIcon.png'
import addIcon from '../../../assets/icons/addIcon.png'
import { checkAccess } from '../../../helpers/authentication';

const RolestList = () => {

  const [roles, setRoles] = useState([]);
  const [changeRoles, setChangeRoles] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [rolePermissions, setRolePermissions] = useState([])
  const [missingRolePermissions, setmissingRolePermissions] = useState([])
  const [selectedRole, setSelectedRole] = useState('');
 
  useEffect(() => {
    getRoles()
      .then(res => {
        setRoles(res.data.roles);
      }) 
    getPermissions()
      .then(res => {
        setPermissions(res.data.permissions); 
      })  
  }, [changeRoles] )

  useEffect(() => {
    if (selectedRole !== '') {
      
      let list = roles.find(role => role.title === selectedRole).permissions;

      let rolePermList = permissions.filter( perm => {
        let flag = false
        list.forEach(element => {
          if ( element === perm.code ) {
            flag = true;
          } 
        });
        return flag
      } ) 

      let roleMisPermList = permissions.filter( perm => {
        let flag = true
        list.forEach(element => {
          if ( element === perm.code ) {
            flag = false;
          } 
        });
        return flag
      } ) 

      setRolePermissions(rolePermList);
      setmissingRolePermissions(roleMisPermList);
    }
  }, [selectedRole, roles])

  const removePermission = (code) => {
    removePermissionFromRole({ role:selectedRole, code: code })
    .then(res => {
      console.log('hellow');
      setChangeRoles(!changeRoles)
      console.log(changeRoles);
    })
  }

  const addPermission = (code) => {
    addPermissionToRole({ role: selectedRole, code: code })
    .then(res => {
      console.log('hellow');
      setChangeRoles(!changeRoles)
      console.log(changeRoles);
    })
  }

  const renderCloseButton = (code) => {
    if (selectedRole !== 'Admin' && checkAccess('P0104')) {
      return(
        <div className="permissionButton permissionTileItem" onClick={() => {removePermission(code)}}>
          <img className="closeIcon" alt="close" src={closeIcon} />
        </div>
      )
    } else {
      return(
        <span></span>
      )
    }
  }

  return (
    <div>
        <div className="RolesList gridView" >  
          { roles.map(role => {
            return(
              <div 
                key={role.title} 
                className={selectedRole === role.title? "rolesTiles Active": "rolesTiles"}
                onClick={() => setSelectedRole(role.title)}  >
                { role.title }
              </div>
            )
          }) }
        </div>

      <div >
        <div className="GrantedPermissionsSec">
          <div className="GrantedPermissionsSecText" >Granted Permissions</div>
          <div className="PermissionsList gridView">
            { rolePermissions.map(permission => {
              return(
                <div key={permission.code} className="permissionListTile">
                  <div className="permissionTileItem">{ `${permission.resource}:   ${permission.description}` }</div>
                  { renderCloseButton(permission.code) }
                </div>
              )
            }) }
          </div>
        </div>

        <div className="GrantedPermissionsSec">
        <div className="GrantedPermissionsSecText" >Denied Permissions</div>
          <div className="PermissionsList missingPermission gridView" >
            { missingRolePermissions.map(permission => {
              return(
                <div key={permission.code} className="permissionListTile missingPermission">
                  <div className="permissionTileItem">{ `${permission.resource}:   ${permission.description}` }</div>
                  <div className="permissionButton permissionTileItem" onClick={() => {addPermission(permission.code)}} >
                    <img className="closeIcon" src={addIcon} />
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      </div>
      </div>
   
  )
}

export default RolestList
