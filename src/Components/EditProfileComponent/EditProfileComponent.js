import React from 'react'
import { useState, useContext, useEffect } from 'react'
import './EditProfileComponent.scss'
import { AuthContext } from '../../context/AuthContext';
import { getUser } from '../../api/userApi/userApi';
import { editProfile } from '../../api/userApi/userApi';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const EditProfileComponent = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [modal, setModal] = useState("true");

    const handleSubmit = (e) => {
        e.preventDefault()
        editProfile({_id: user.id, name,email,location, phonenum})
        .then(res => {
            console.log(res.data.editedDetails)
        });
        setIsPending(false);
    }

    useEffect(() => {
        getUser({_id: user.id})
        .then(res => {
          let curruser = res.data.user
            //console.log(res);
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
                    onChange={(e) => {setName(e.target.value)}} />
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Email</label>
                    <input type="email" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={email}
                    onChange={(e) => {setEmail(e.target.value)}} disabled/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Location</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={location}
                    onChange={(e) => {setLocation(e.target.value)}}/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Telephone No</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password" defaultValue={phonenum}
                    onChange={(e) => {setPhonenum(e.target.value)}} disabled/>
                    </div>
                </div>

                <div class="modal fade"  data-backdrop="false" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Information Saved Successfully</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <TiTick className="success-tick"/>
                            </div>

                            
                            <div class="modal-footer"> 
                               <Link to="/myprofile">                 
                                    <Button buttonSize="wide" buttonColour="dark-blue" onClick = {(e) => {setModal("false")}}>Go to profile</Button>
                               </Link>

                               <Link to="/">                 
                                    <Button buttonSize="wide" buttonColour="dark-blue" onClick = {(e) => {setModal("false")}} data-dismiss="modal">Go to home</Button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Save Information
                </button>
            </form>     
            
        </div>
   

    )
}

export default EditProfileComponent
