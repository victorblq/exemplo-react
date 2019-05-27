import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import '../App.css';

import MessageList from './message/MessageList';

class Home extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Logo />
                    <Link className="Link" to="/users">Go to users</Link>
                    <Link className="Link" to="/messages/form">Cadastrar Mensagem</Link>

                    <MessageList/>
                </header>
            </div>
        );
    } 
}

export default Home;
