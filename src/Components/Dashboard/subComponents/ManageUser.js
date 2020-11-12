import React, { useState } from 'react'
import '../style/ManageUser.scss'
import PhoneInput from 'react-phone-input-2';

const ManageUser = () => {

  const [contactNo, setContactNo] = useState('')
  const [toggleFindMethod, setToggleFindMethod] = useState(true);

  const [user, setUser] = useState({
    name: "Nipun Nawodya",
    email: "nipun299233@gmail.com",
    contactNo: "94714133415",
    enable: true,

  })

  return (
    <div className="ManageUser ManageUserPageGrid">

      <div className="UserFindFormSec item1">
        <div className="UserFindFormTitle">{ toggleFindMethod? "Enter User's Contact Number": "Enter User's Email Address" }</div>
          <form>

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
              <input className="form-control UserFindFormItem" type="email" placeholder="Enter user email Address" />
            }
            <button className="toggleFindButton UserFindFormItem">FIND USER</button>
          </form>
          <button 
            className="toggleFindButton" 
            onClick={() => setToggleFindMethod(!toggleFindMethod)} >
              { toggleFindMethod? "Find using Email Address": "Find using Contact Number" }
          </button>
        </div>

        <div className="item2 userTile card">
            <h1>User card</h1>
        </div>

    </div>
  )
}

export default ManageUser;
