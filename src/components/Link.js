import React from 'react'
import { Link } from 'react-router-dom';
import './../App.css';

const styledLink = (props) => {
    const { children, className, ...rest } = props;
    
    return <Link className={['Link', className].join(' ')} {...rest}>{children}</Link>
}

export default styledLink;