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
    NavLink,
    Row, 
    Col
} from 'reactstrap';
import axios from 'axios';

class Profile extends Component {

    constructor(props){
        super(props)
            this.state = {
                fullname: '',
                address: '',
                address2: '',
                city: '',
                state: '',
                zipcode: 0,
                //modal: false
            }
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const newProfile = this.state

        console.log('Profile Data: ', newProfile);

        axios.post('http://localhost:4000/api/profile/add', newProfile)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <div>
               <NavLink onClick = {this.toggle} href = '#'>Profile Management</NavLink>

               <Modal isOpen = {this.state.modal}>
                   <ModalHeader toggle = {this.toggle}>Manage Your Profile</ModalHeader>
                   <ModalBody>
                       <Form onSubmit = {this.onSubmit}>
                           <FormGroup>
                               <Label for = "fullname">Full Name</Label>
                               <Input
                                    type = "text"
                                    name = "fullname"
                                    placeholder = "Full Name"
                                    className = "mb-3"
                                    onChange = {this.onChange}
                               />
                               <FormGroup>
                                <Label for="exampleAddress">Address 1</Label>
                                <Input 
                                    type="text" 
                                    name="address" 
                                    placeholder="1234 Main St"
                                    onChange = {this.onChange}
                                />
                                </FormGroup>
                                <FormGroup>
                                <Label for="exampleAddress2">Address 2</Label>
                                <Input 
                                    type="text" 
                                    name="address2" 
                                    onChange ={this.onChange}
                                />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input 
                                        type="text"
                                        name="city"
                                        onChange = {this.onChange}       
                                    />
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">State</Label>
                                        <Input 
                                            type='select'
                                            name= 'state'
                                            onChange = {this.onChange}>
                                        <option>Select State</option>
                                        <option value="AL">AL</option>
                                        <option value="AK">AK</option>
                                        <option value="AR">AR</option>	
                                        <option value="AZ">AZ</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DC">DC</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="IA">IA</option>	
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="MA">MA</option>
                                        <option value="MD">MD</option>
                                        <option value="ME">ME</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MO">MO</option>	
                                        <option value="MS">MS</option>
                                        <option value="MT">MT</option>
                                        <option value="NC">NC</option>	
                                        <option value="NE">NE</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>			
                                        <option value="NV">NV</option>
                                        <option value="NY">NY</option>
                                        <option value="ND">ND</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VT">VT</option>
                                        <option value="VA">VA</option>
                                        <option value="WA">WA</option>
                                        <option value="WI">WI</option>	
                                        <option value="WV">WV</option>
                                        <option value="WY">WY</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                    <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input 
                                        type="text"
                                        name="zipcode" 
                                        onChange = {this.onChange}
                                    />
                                    </FormGroup>  
                                    </Col>
                                </Row>
                               <Button type ="reset" block>Reset</Button>
                               <Button color = "success" block>Submit</Button>
                           </FormGroup>
                       </Form>
                   </ModalBody>
               </Modal>
            </div>
        );
    }
}


export default Profile;