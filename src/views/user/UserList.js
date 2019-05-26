import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

import '../../App.css';

const axios = require('axios');

class UserList extends Component {
    state = {
        users: []
    }

    changeUsername = (user) => {
        user.username = "mudei mas nao persisti";

        this.setState({users: this.state.users});
    }
    
    componentDidMount(){
        axios.get('/users')
        .then((result) => {
            this.setState({users: result.data});
        }).catch((err) => console.error(err));
    }
 
    render(){
        const users = this.state.users.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <li>
                        {user.username} | 
                        <Link className="Link" to={`/users/${user.id}`}>Detail</Link>
                    </li>
                </React.Fragment>
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link className="Link" to="/">Go to home</Link>
                    <ol>{users}</ol>
                </header>
            </div>
        );
    } 
}

export default UserList;