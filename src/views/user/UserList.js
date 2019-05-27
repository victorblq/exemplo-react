import React, { useState, useEffect } from 'react';

import Link from '../../components/Link';
import Logo from '../../components/Logo';

import '../../App.css';

import axios from 'axios';

function UserList(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const { data } = await axios.get('/users');
        setUsers(data);
    }

    function renderUserList() {
        
        const usersRow = users.map(({username, id}) => (
            <li key={id}>
                {username} | 
                <Link className="Link" to={`/users/${id}`}>Detail</Link>
            </li>
        ))
        
        return(
            <ol>
                {usersRow}
            </ol>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Link className="Link" to="/">Back</Link>

                {renderUserList()}
            </header>
        </div>
    )


}

export default UserList;
