import React, { useState, useEffect } from 'react';

import Link from '../../components/Link';
import Logo from '../../components/Logo';

import axios from 'axios';

function UserList(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const { data } = await axios.get('/user');
        setUsers(data);
    }

    function renderUserList() {
        const usersRow = users.map(({username, id}) => (
            <li key={id}>
                {username} | 
                <Link to={`/users/${id}`}>Detail</Link>
            </li>
        ))
        
        return(
            <ol>
                {usersRow}
            </ol>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Link to="/">Back</Link>

                {renderUserList()}
            </header>
        </div>
    )


}

export default UserList;
