import React from 'react'
import { useState, useContext, useEffect } from 'react'
import './EditProfileComponent.scss'
import { AuthContext } from '../../context/AuthContext';
import { getUser } from '../../api/userApi/userApi';
import { editProfile } from '../../api/userApi/userApi';

const EditProfileComponent = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phonenum, setPhonenum] = useState('');

    const handleSubmit = (e) => {
        editProfile({name,email,location, phonenum});
    }

    useEffect(() => {
        getUser({_id: user.id})
        .then(res => {
          let curruser = res.data.user
            console.log(res);
            setName(curruser.name);
            setEmail(curruser.email);
            setLocation(curruser.location);
            setPhonenum(curruser.contactNo);
        })  
      }, []);

    return (
        <div className="edit-pro-container container">
    
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Email" defaultValue={name}
                    onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Email</label>
                    <input type="email" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={email}
                    onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Location</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={location}
                    onChange={(e) => {setLocation(e.target.value)}}/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Telephone No</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={phonenum}
                    onChange={(e) => {setPhonenum(e.target.value)}}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save Information</button>
            </form>     
        </div>
   

    )
}

export default EditProfileComponent
