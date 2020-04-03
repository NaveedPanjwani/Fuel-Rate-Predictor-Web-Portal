import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProptTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, 
    FormGroup,
    Label, 
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import axios from 'axios'

class RegisterModal extends Component {
 
    constructor(props){
        super(props) 
            this.state = {
                username: '',
                password : ''
        }
    }

    // static ProptTypes = {
    //     isAuthenticated: ProptTypes.bool,
    //     error: ProptTypes.object.isRequired,
    //     register: ProptTypes.func.isRequired,
    //     clearErrors : ProptTypes.func.isRequired
    // }

    // componentDidUpdate(pervProps){
    //     const { error, isAuthenticated } = this.props;
    //     if(error !== pervProps.error){
    //         //check for register error
    //         if(error.id === 'REGISTER_FAIL'){
    //             this.setState({msg: error.msg.msg})
    //         } else {
    //             this.setState({msg: null});
    //         }
    //     }

    //     //close modal, if authenticated
    //     if(this.state.modal){
    //         if(isAuthenticated){
    //             this.toggle();
    //         }
    //     }
    // }


    toggle = () => {
        //clear errors
        //this.props.clearErrors();
        this.setState( {
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = this.state;

        console.log("New user" , newUser)

        axios.post('http://localhost:4000/api/user/add', newUser)
            .then(res => console.log(res.data))
        
        this.setState({
            username: '',
            password: ''
        })

        //this.props.register(newUser);
    }
    
    render(){
        return (
            <div>
               <NavLink onClick={this.toggle} href ="#">Register</NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle ={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                    { this.state.msg ? (
                    <Alert color='danger'>{this.state.msg}</Alert>
                    ) : null}
                        <Form onSubmit= {this.onSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input 
                                    type = "text"
                                    name = "username"
                                    placeholder="Username"
                                    className = "mb-3"
                                    value = {this.state.username}
                                    onChange = {this.onChange}
                                />

                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"
                                    name = "password"
                                    placeholder="Password"
                                    className = "mb-3"
                                    value = {this.state.password}
                                    onChange = {this.onChange}
                                />
                            
                                <Button type='submit' color='dark' style= {{marginTop: '2rem'}} block>
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);