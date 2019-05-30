import React, {useState, useEffect} from 'react';
import Link from '../../components/Link';
import axios from 'axios';

//@TODO PROTEGER ESSE COMPONENT CONTRA USUARIO NAO LOGADO
function Secure(props){
    const [text, setText] = useState("Not logged");

    useEffect(() => {
        loadText();    
    });

    async function loadText(){
        const { data } = await axios.get('/secure');
        console.log(data);
        setText(data);
    }

    function logout(e){
        e.preventDefault();

        axios.get('/logout')
        .then(() => {
            //redirect
        });
    }

    return (
        <React.Fragment>
            <Link className="black-link" to="/">Back</Link>
            <p>{text}</p>
            <button onClick={(e) => logout(e)}>Logout</button>
        </React.Fragment>
    );
}

export default Secure;