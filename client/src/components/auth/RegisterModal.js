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
        email : '',
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
                                <Label for="name">Name</Label>
                                <Input 
                                    type="text"
                                    name = "name"
                                    id = "name"
                                    placeholder="Name"
                                    className = "mb-3"
                                    onChange = {this.OnChange}
                                />

                                <Label for="email">Email</Label>
                                <Input 
                                    type="email"
                                    name = "email"
                                    id = "email"
                                    placeholder="Email"
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
                                
                                <Label for="password">Confrim Password</Label>
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