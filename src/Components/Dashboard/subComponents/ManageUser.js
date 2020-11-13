import React, { useState, useContext, useEffect } from 'react'
import '../style/ManageUser.scss'
import PhoneInput from 'react-phone-input-2';
import { deleteUserByAdmin, editUserByAdmin, findUserAdm } from '../../../api/userApi/userAdminApi';
import { getRoles } from '../../../api/roleApi/roleApi';
import { checkAccess } from '../../../helpers/authentication';
import { AuthContext } from '../../../context/AuthContext';

const ManageUser = () => {

  const authDetails = useContext(AuthContext);

  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('')
  const [toggleFindMethod, setToggleFindMethod] = useState(true);
  const [userFound, setUserFound] = useState(false);
  const [notFoundError, setNotFoundError] = useState('');
  const [user, setUser] = useState({});
  const [roles, setRoles] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const [formRole, setformRole] = useState('');
  const [formVerifyStatus, setformVerifyStatus] = useState(false);
  const [formIsDissable, setformIsDissable] = useState(false);

  useEffect(() => {
    setformRole(user.role);
    setformIsDissable(user.isDissable);
    setformVerifyStatus(user.verifyStatus);
  }, [user, roles])

  const findUser = (e) => {
    e.preventDefault();
    setToggleEdit(false);
    findUserAdm({ email, contactNo })
    .then(res => {
      setUser(res.data);
      getRoles()
      .then(res => {
        setRoles(res.data.roles);
        e.target.reset();
      })
      setUserFound(true)
    })
    .catch(err => {
      console.log(err.response);
      setNotFoundError(err.response.data.error);
      setUserFound(false);
    })
  }

  const editUser = (e) => {
    e.preventDefault();
    editUserByAdmin({ 
      _id: user._id, 
      role: formRole, 
      isDissable: formIsDissable, 
      verifyStatus: formVerifyStatus 
    }).then(res => {
      getUser();
    })
  }

  const deleteUser = () => {
    deleteUserByAdmin({ _id: user._id })
    .then(res => {
      getUser();
    })
  }

  const getUser = () => {
    setToggleEdit(false);
      findUserAdm({ email, contactNo })
      .then(res => {
        setUser(res.data);
        setUserFound(true)
      })
      .catch(err => {
        console.log(err.response);
        setNotFoundError(err.response.data.error);
        setUserFound(false);
      })
  }

  return (
    <div className="ManageUser ManageUserPageGrid">

      <div className="UserFindFormSec item1">
        <div className="UserFindFormTitle">{ toggleFindMethod? "Enter User's Contact Number": "Enter User's Email Address" }</div>
          <form onSubmit={(e) => findUser(e)}>

            { toggleFindMethod &&
              <PhoneInput 
                country={'lk'} className="PhoneInput UserFindFormItem" 
                onChange={value => setContactNo(value)}
                  inputProps={{
                      name: 'phone',
                      required: true,
              }}/>
            }

            { !toggleFindMethod &&
              <input 
                className="form-control UserFindFormItem" 
                type="email" onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter user email Address" />
            }
            <button className="toggleFindButton UserFindFormItem">FIND USER</button>
          </form>
          <button 
            className="toggleFindButton" 
            onClick={() => setToggleFindMethod(!toggleFindMethod)} >
              { toggleFindMethod? "Find using Email Address": "Find using Contact Number" }
          </button>
        </div>

        { userFound && 
          <div className="item2 userTile card">
            <div className="userTileGrid">
              <div className="item1">
                <div className="userTileName">{ user.name }</div>
                <div className="userStatusGrid">
                  <div className="userTileRole item1">{ user.role }</div>
                  { user.verifyStatus && 
                    <div className="userTileVerified item2">Verified</div>
                  }
                  { !user.verifyStatus &&
                    <div className="userTileNotVerified item3">Not Verified</div>
                  }
                  { !user.isDissable &&
                    <div className="userTileVerified item4">Enabled</div>
                  }
                  { user.isDissable &&
                    <div className="userTileDissabled item4">Disabled</div>
                  }
                </div>
                <div className="userTileEmail">{ user.email }</div>
                <div className="userTileContactNo">{ user.contactNo }</div>
              </div>
              <div className="item2">
                <div className="userStatusGrid" >
                  { ((checkAccess('P0201') || checkAccess('P0105') ) === true  && user._id !== authDetails.user.id && !toggleEdit) &&
                    <div className="item1"><button onClick={() => {setToggleEdit(true)}} className="toggleFindButton EditDeleteButton">EDIT</button></div>
                  }
                  { (checkAccess('P0202') === true && user._id !== authDetails.user.id) &&
                    <div className="item2"><button className="toggleFindButton EditDeleteButton" onClick={() => {setToggleDelete(true)}}>DELETE</button></div>
                  }
                </div>
              </div>
            </div>
            { toggleEdit &&
              <div className="EditByAdminSec">
                <form  onSubmit={(e) => {editUser(e)}}>
                  { checkAccess('P0105') === true &&
                    <select className="form-control RoleSelect EditByAdminSecItem" 
                    defaultValue={user.role} onChange={(e) => {setformRole(e.target.value)}}>
                      { roles.map(role => {
                        return(
                          <option key={role.title} value={role.title} >{ role.title }</option>
                        )
                      }) }
                    </select>
                  }
                  { checkAccess('P0201') === true &&
                    <div className="EditByAdminSecItem">
                      <input 
                        type="checkbox" id="verify" 
                        name="verify" value={true} 
                        style={{marginRight:"0.3em"}} 
                        defaultChecked={user.verifyStatus}
                        onClick={(e) => {setformVerifyStatus(e.target.checked)}} />
                      <label >Verified</label>
                    </div>
                  }
                  { checkAccess('P0201') === true &&
                    <div className="EditByAdminSecItem">
                      <input 
                        type="checkbox" id="enable" 
                        name="enable" value={true} 
                        style={{marginRight:"0.3em"}} 
                        defaultChecked={!user.isDissable}
                        onClick={(e) => {setformIsDissable(!e.target.checked)}} />
                      <label >Enable</label>
                    </div>
                  }

                    <br/><br/>
                    <button className="toggleFindButton EditByAdminSecItem" >SAVE</button>
                  </form>
                  <button className="toggleFindButton EditByAdminSecItem" onClick={() => {setToggleEdit(false)}}>Cancel</button>
              </div>
            }
            { toggleDelete &&
              <div className="EditByAdminSec">
                <div>Do you want to delete this user permanently?</div>
                <button className="toggleFindButton deleteYesNoButton" onClick={deleteUser}>YES</button>
                <button className="toggleFindButton deleteYesNoButton" onClick={() => {setToggleDelete(false)}}>No</button>
              </div>
            }
          </div>
        }
        { (!userFound === true && notFoundError === '') && 
          <div className="item4 card">
            <div>No User found yet...</div>
          </div>
        }

        { (!userFound === true && notFoundError !== '') && 
          <div className="item4 card alert alert-danger">
            <div>No User found for entered information</div>
          </div>
        }

    </div>
  )
}

export default ManageUser;
