import React, { Component } from 'react';
 
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            email:'',
            message:[],
        }
    }
    render() { 
        return (
            <div className="contact">
                <h3>Contact Us</h3>
                <input 
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={(e) =>this.handleInput('username', e.target.value)}
                />
                <input
                type="email"
                placeholder="Enter email"
                onChange={(e) =>this.handleInput('email', e.target.value)}
                value={this.state.email}
                />
                <input
                type="textbox"
                placeholder="Message"
                value={this.state.message}
                onChange={(e) =>this.state.handleInput('message', e.target.value)}
                />
                <button onClick={() =>this.addMessage()}>Submit</button>
            </div>
        );
    }
}
 
export default Contact;