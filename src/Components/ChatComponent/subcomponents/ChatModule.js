import React, { useState, useContext, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import ChatContainer from './ChatContainer'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import { AuthContext } from '../../../context/AuthContext';
import Axios from "axios";
import { getUser } from '../../../api/userApi/userApi';


function ChatApp() {
  // const [id, setId] = useLocalStorage('id')

  const { user, dispatch } = useContext(AuthContext);

  const dashboard = (
    <SocketProvider user={user}>
      <ContactsProvider>
        <ConversationsProvider user={user}>
          <ChatContainer user={user} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (




    <SocketProvider user={user}>
      <ContactsProvider>
        <ConversationsProvider user={user}>
          <ChatContainer user={user} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>






  )
}

export default ChatApp;