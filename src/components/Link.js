import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import './../App.css';

const styledLink = (props) => {

  const { children, ...rest } = props;

  return <Link className="Link" {...rest}>{children}</Link>
}

export default styledLink;