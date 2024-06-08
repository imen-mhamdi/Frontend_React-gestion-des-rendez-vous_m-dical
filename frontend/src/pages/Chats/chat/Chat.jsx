import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Chat.css';
import ChatContent from '../chatContent/ChatContent';
import ChatList from '../chatList/ChatList';

const Chat = () => {
    return (
        <div className="main-wrapper">
            <div className="main_chat" style={{ marginLeft: '15%', marginTop: '20px' }}>
                <ChatList />
                <ChatContent />
            </div>
        </div>
    );
}

export default Chat;
