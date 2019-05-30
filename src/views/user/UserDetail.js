import React, { Component } from 'react';
import Link from '../../components/Link';
import Logo from '../../components/Logo';

const axios = require('axios');

class UserDetail extends Component{
    state = {
        user: {}
    };

    componentDidMount(){
        //Separate params from this.props
        const { match: { params } } = this.props;

        axios.get(`/user/${ params.userId }`)
        .then((result) => {
            this.setState({user: result.data});
        })
        .catch(err => console.error(err));
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Logo />
                    <Link to="/users">Back</Link>

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