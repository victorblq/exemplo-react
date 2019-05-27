import React, { useState, useEffect } from 'react';
import Link from '../../components/Link';

const axios = require('axios');

function MessageList(props){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    async function loadMessages(){
        const { data } = await axios.get('/messages');

        setMessages(data);
    }

    function renderMessagesList(){
        const messageRows = messages.map((message) => (
            <React.Fragment key={message.id}>
                <li>
                    {message.text} | {message.user.username} | 
                    <Link to={`/messages/form/${message.id}`}>Editar</Link>
                </li>
            </React.Fragment>
        ));

        return messageRows;
    }

    return (
        <ol>{renderMessagesList()}</ol>
    );
}

export default MessageList;