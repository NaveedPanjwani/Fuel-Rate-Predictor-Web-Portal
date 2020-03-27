import React, { Component } from 'react';
import login_logo from '../login_logo.svg';
import '../Login.css';
import {
    Button, 
    Form, 
    FormGroup,
    Label,
    Input
} from 'reactstrap'

class Login extends Component {
    render(){
        return (
            <Form className="login-form">
                <img src={login_logo} className="login_logo" alt="logo"></img>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type = "email" placeholder ="Email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type = "password" placeholder ="Password"></Input>
                </FormGroup>
                <Button className = "btn-lg btn-dark btn-block">Login</Button>
                <div className ="other-links">
                    <a href ="/login">Sign up</a>
                    <span className="p-2">|</span>
                    <a href ="/login">Forgot Password</a>
                </div>
            </Form>
        )
    }
}

export default Login;