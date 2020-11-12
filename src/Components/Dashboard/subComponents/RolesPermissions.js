import { addPermissionToRole, createRole, getRoles, removePermissionFromRole, deleteRole } from '../../../api/roleApi/roleApi';
import React, { useEffect, useState } from 'react';
import '../style/RightSideContent.scss'
import { getPermissions } from '../../../api/roleApi/permissionApi';
import closeIcon from '../../../assets/icons/closeIcon.png'
import addIcon from '../../../assets/icons/addIcon.png'
import trashBin from '../../../assets/icons/trashbin1.png'
import { checkAccess } from '../../../helpers/authentication';

const RolestList = () => {

  const [roles, setRoles] = useState([]);
  const [changeRoles, setChangeRoles] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [rolePermissions, setRolePermissions] = useState([])
  const [missingRolePermissions, setmissingRolePermissions] = useState([])
  const [selectedRole, setSelectedRole] = useState('');
  const [newRole, setNewRole] = useState('');
 
  useEffect(() => {// get roles and permissions from the backend
    getRoles()
      .then(res => {
        setRoles(res.data.roles);
      }) 
    getPermissions()
      .then(res => {
        setPermissions(res.data.permissions); 
      })  
  }, [changeRoles] )

  useEffect(() => {// filter granted and denied for each role
    if (selectedRole !== '' && roles.find(role => role.title === selectedRole)) {
      
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
    } else {
      setRolePermissions([]);
      setmissingRolePermissions([]);
    }
  }, [selectedRole, roles])

  const removePermission = (code) => {
    removePermissionFromRole({ role:selectedRole, code: code })
    .then(res => {
      setChangeRoles(!changeRoles)
      console.log(changeRoles);
    })
  } 

  const addPermission = (code) => {
    addPermissionToRole({ role: selectedRole, code: code })
    .then(res => {
      setChangeRoles(!changeRoles)
      console.log(changeRoles);
    })
  }

  const addRole = (e) => {
    e.preventDefault();
    createRole({ role: newRole.trim() })
    .then(res => {
      setChangeRoles(!changeRoles);
      e.target.reset();
    })
  }

  const deleteNewRole = (role) => {
    deleteRole({ role: role })
    .then(res => {
      setChangeRoles(!changeRoles);
    })
    .catch(err => {
      console.log(err.response.data.error);
      setChangeRoles(!changeRoles);
    });
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
                { (checkAccess('P0106') === true && role.title !== 'Admin' && role.title !== 'Moderator' && role.title !== 'Basic' ) &&
                  <div className="permissionButton permissionTileItem" onClick={() => deleteNewRole(role.title)}>
                    <img className="closeIcon" alt="close" src={trashBin} />
                  </div>
                }
              </div>
            )
          }) }
        </div>
        { checkAccess('P0101') === true && 
          <form onSubmit={(e) => {addRole(e)}} >
            <div className="form-group roleInput">
              <input className="form-control" onChange={(e) => {setNewRole(e.target.value)}} type="text" name="newRole" placeholder="Enter the Role Title" />
              <button className="btn btn-secondary" >ADD ROLE</button>
            </div>
          </form>
        }
      <div >
        <div className="GrantedPermissionsSec">
          <div className="GrantedPermissionsSecText" >Granted Permissions</div>
          <div className="PermissionsList gridView">
            { rolePermissions.map(permission => {
              return(
                <div key={permission.code} className="permissionListTile">
                  <div className="permissionTileItem"><b>{`( ${permission.resource} ) ::`}</b>{` ${permission.description}` }</div>
                  { (selectedRole !== 'Admin' && checkAccess('P0104') === true) &&
                    <div className="permissionButton permissionTileItem" onClick={() => {removePermission(permission.code)}}>
                      <img className="closeIcon" alt="close" src={closeIcon} />
                    </div>
                  }
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
                  <div className="permissionTileItem"><b>{`( ${permission.resource} ) ::`}</b>{` ${permission.description}` }</div>
                  { checkAccess('P0102') === true && 
                      <div className="permissionButton permissionTileItem" onClick={() => {addPermission(permission.code)}} >
                        <img className="closeIcon" src={addIcon} alt="trashbin"/>
                      </div>
                  }
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
