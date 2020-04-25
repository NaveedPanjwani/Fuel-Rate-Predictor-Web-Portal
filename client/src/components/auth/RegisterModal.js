import React, { useState, useRef,useEffect } from 'react';
import AuthService from '../../Services/AuthService';
import Message from '../Message';

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
} from 'reactstrap';

const RegisterModal = (props) => {

    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const resetForm = ()=>{
        setUser({username : "", password : ""});
    }
    
    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    //If no error, then close the modal
                    if(modal){
                        toggle();
                    }    
                },1000)
            }
        })
    }


        return (
            <div>
               <NavLink onClick={toggle}>Register</NavLink>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle ={toggle}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit= {onSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input 
                                    type = "text"
                                    name = "username"
                                    placeholder="Username"
                                    required
                                    minLength = "7"
                                    className = "mb-3"
                                    value={user.username}
                                    onChange = {onChange}
                                    
                                />

                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"
                                    name = "password"
                                    placeholder="Password"
                                    required
                                    minLength = "7"
                                    className = "mb-3"
                                    value={user.password} 
                                    onChange = {onChange}
                                />
                            
                                <Button type='submit' color='dark' style= {{marginTop: '2rem'}} block>
                                    Register
                                </Button> 
                            </FormGroup>
                        </Form>
                        {message ? <Message message={message}/> : null}
                    </ModalBody>
                </Modal>
            </div>
        );
}

export default RegisterModal;