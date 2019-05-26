import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

import '../../App.css';

const axios = require('axios');

class MessageForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: {
                id: null,
                text: ''
            }
        }

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidMount(){
        const {match: {params}} = this.props;
        
        if(params.messageId) {
            axios.get(`/messages/${params.messageId}`)
            .then((result) => {
                this.setState({
                    message: result.data
                });
            })
            .catch(err => console.error(err));
        }
    }

    handleFormChange(event){
        const name = event.target.name;

        this.setState({
            message: {
                ...this.state.message,
                [name]: event.target.value.toUpperCase()
            }
        });
    }

    saveMessage(e){
        e.preventDefault();

        if(this.state.message.id != null){
            this.updateMessage();
        } else {
            this.insertMessage();
        }
    }

    insertMessage(){
        axios.post('/messages', this.state.message)
        .then((result) => {
            this.props.history.push('/');
        })
        .catch(err => console.error(err));
    }

    updateMessage(){
        axios.put('/messages', this.state.message)
        .then((result) => {
            this.props.history.push('/');
        })
        .catch(err => console.error(err));
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link className="Link" to="/">Back</Link>

                    <form>
                        <div>
                            <label>Message: </label>
                            <input type="text" name="text" value={this.state.message.text} onChange={this.handleFormChange}/>
                        </div>

                        <button onClick={(e) => this.saveMessage(e)}>Save</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default MessageForm;