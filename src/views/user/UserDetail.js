import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

import '../../App.css';

const axios = require('axios');

class UserDetail extends Component{
    state = {
        user: {}
    };

    componentDidMount(){
        //Separate params from this.props
        const { match: { params } } = this.props;

        axios.get(`/users/${ params.userId }`)
        .then((result) => {
            this.setState({user: result.data});
        })
        .catch(err => console.error(err));
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link className="Link" to="/users">voltar</Link>

                    <div>
                        <p>ID: {this.state.user.id}</p>
                        <p>Nome: {this.state.user.username}</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default UserDetail;