import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, 
    FormGroup,
    Label, 
    Input,
    NavLink
} from 'reactstrap';
import ProptTypes from 'prop-types'

class RegisterModal extends Component {
    state = {
        modal: false,
        name  : '',
        username: '',
        password: '',
        msg: null
    }

    static ProptTypes = {
        isAuthenticated: ProptTypes.bool,
        error: ProptTypes.object.isRequired
    }

    toggle = () => {
        this.setState( {
            modal: !this.state.modal
        });
    }
    
    render(){
        return (
            <div>
               <NavLink onClick={this.toggle} href ="#">Register</NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle ={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit= {this.onSubmit}>
                            <FormGroup>

                                <Label for="username">Username</Label>
                                <Input 
                                    type="text"
                                    name = "username"
                                    id = "username"
                                    placeholder="Username"
                                    className = "mb-3"
                                    onChange = {this.OnChange}
                                />

                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"
                                    name = "password"
                                    id = "password"
                                    placeholder="Password"
                                    className = "mb-3"
                                    onChange = {this.OnChange}
                                />
                            
                                <Button color='dark' style= {{marginTop: '2rem'}} block>
                                    Register
                                </Button> 
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

export default RegisterModal;