import React, { Component } from 'react';
import login_logo from '../../login_logo.svg';
import '../index.css';

import {
    Button, 
    Form, 
    FormGroup,
    Label,
    Input
} from 'reactstrap'

class Login extends Component {
    state = {
        email : '',
        password: '',
        msg: null
    }

    render(){
        return (
            <Form className="login-form">
                <img src={login_logo} className="login_logo" alt="logo"></img>
                <FormGroup>
                    <Label>Email</Label>
                    <Input 
                        type = "email" 
                        placeholder ="Email" 
                        className = "mb-3"
                    />
               
                    <Label>Password</Label>
                    <Input 
                        type = "password" 
                        placeholder ="Password" 
                        className = "mb-3"
                    />
                    <Button color='dark' style= {{marginTop: '2rem'}} block>Login</Button>
                </FormGroup> 
            </Form>
        );
    }
}

export default Login;