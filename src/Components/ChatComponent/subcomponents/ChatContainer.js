import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import './ChatContainer.scss'
import Axios from "axios";
import { getUser } from '../../../api/userApi/userApi';


export default function ChatContainer({ user }) {
    const [name, setname] = useState('');
    const [id, setid] = useState('');

    useEffect(() => {
        //console.log(user.id);
        getUser({ _id: user.id })
            .then(res => {
                let curruser = res.data.user;
                console.log(curruser.id);
                setid(curruser._id);
                setname(curruser.name);
            })
    }, []);

    const { selectedConversation } = useConversations()



    return (
        //  <div className="d-flex" style={{ height: '100vh' }}>
        <div className="chatapp-container">
            <div className="d-flex" style={{
                height: '83vh'
            }}>
                <Sidebar id={id} />
                {selectedConversation && <OpenConversation />}

            </div >
        </div>
    )
}