import React, { useState } from 'react';
import axios from 'axios';

function LoginForm(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        const credentials = {
            login: login,
            password: password
        };

        axios.post('/authentication/authenticate', credentials)
        .then((result) => {
           //redirect 
        })
        .catch((err) => console.error(err));
    }

    return (
        <form>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} name="login" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
            <button type="button" onClick={(e) => handleSubmit(e)}>Sign in</button>
        </form>  
    );
}

export default LoginForm;