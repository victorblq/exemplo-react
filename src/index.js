import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import Home from './views/Home';
import MessageForm from './views/message/MessageForm';
import UserDetail from './views/user/UserDetail';
import UserList from './views/user/UserList';
import Secure from './views/secure/Secure';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/messages/form" exact={true} component={MessageForm}/>
            <Route path="/messages/form/:messageId" component={MessageForm}/>
            <Route path="/users" exact={true} component={UserList} />
            <Route path="/users/:userId" component={UserDetail}/>
            <Route path="/secure" component={Secure}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
