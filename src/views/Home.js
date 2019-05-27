import React, { Component } from 'react';
import Link from '../components/Link';
import Logo from '../components/Logo';

import MessageList from './message/MessageList';

class Home extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Logo />
                    <Link to="/users">Go to users</Link>
                    <Link to="/messages/form">Add Mensagem</Link>
                    <Link className="secure-link" to="/secure">To Secure</Link>

                    <MessageList/>
                </header>
            </div>
        );
    } 
}

export default Home;
