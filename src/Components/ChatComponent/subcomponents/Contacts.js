import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationsProvider'


export default function Contacts() {
    const { contacts } = useContacts()
    const { createConversation } = useConversations()

    function handleClick(contactId) {
        //preventDefault();
        //console.log(contactId);
        createConversation([contactId])
    }
        

    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id} onClick={() => handleClick(contact.id)}>


                    {contact.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}