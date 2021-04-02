import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import avatarIcon from '../../../assets/images/Avatar-Image.png'
import '../style/Conversations.scss';

export default function Conversations() {
    const { conversations, selectConversationIndex } = useConversations()

    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onClick={() => selectConversationIndex(index)}
                    active={conversation.selected}
                >
                    <img className="AccountPic" src={avatarIcon} alt="avatar" />
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
