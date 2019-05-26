import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import '../App.css';

import MessageList from './message/MessageList';

class Home extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link className="Link" to="/users">Go to users</Link>
                    <Link className="Link" to="/messages/form">Cadastrar Mensagem</Link>

                    <MessageList/>
                </header>
            </div>
        );
    } 
}

export default Home;
