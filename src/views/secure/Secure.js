import React, {useState, useEffect} from 'react';
import Link from '../../components/Link';
import axios from 'axios';

function Secure(props){
    const [text, setText] = useState("Not logged");

    useEffect(() => {
        loadText();    
    });

    async function loadText(){
        const { data } = await axios.get('/secure');
        console.log(data);
        setText(data.message);
    }

    return (
        <React.Fragment>
            <Link className="black-link" to="/">Back</Link>
            <p>{text}</p>
        </React.Fragment>
    );
}

export default Secure;