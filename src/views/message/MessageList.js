import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const axios = require('axios');

class MessageList extends Component{
    state = {
        messages: []
    };

    componentDidMount(){
        axios.get('/messages')
        .then((result) => {
            this.setState({
                messages: result.data
            });
        });
    }

    render(){
        const messages = this.state.messages.map((message) => {
            return (
                <React.Fragment key={message.id}>
                    <li>
                        {message.text} | {message.user.username} | 
                        <Link className="Link" to={`/messages/form/${message.id}`}>Editar</Link>
                    </li>
                </React.Fragment>
            );
        });

        return (
            <ol>{messages}</ol>
        );
    }
}

export default MessageList;