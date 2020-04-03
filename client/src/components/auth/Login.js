import React, { Component } from 'react';
import login_logo from '../login_logo.svg';
import '../Login.css';
import {
    Button, 
    Form, 
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props)
            this.state = {
                username :'',
                password : ''
            }
    }

    onChange = e => {
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const loginData = this.state
        console.log("Login Data: ", loginData)

        axios.post('http://localhost:4000/api/auth', loginData)
            .then(res => console.log(res.data))
    }

    render(){
        return (
            <Form onSubmit ={this.onSubmit} className="login-form" >
                <img src={login_logo} className="login_logo" alt="logo" />
                <FormGroup>
                    <Label>Username</Label>
                    <Input 
                        type = "text" 
                        name = "username"
                        placeholder ="Username"
                        className = "mb-3"
                        onChange = {this.onChange}>
                    </Input>
                    <Label>Password</Label>
                    <Input 
                        type = "password" 
                        name = "password"
                        placeholder ="Password"
                        className= "mb-3"
                        onChange = {this.onChange}>
                    </Input>
                    <Button className = "btn-lg btn-dark btn-block mb-3">Login</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;