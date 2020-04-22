import React, {useState,  useEffect} from 'react';
import ProfileService from '../Services/ProfileService';
import FormService from '../Services/FormService';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
} from 'reactstrap';
import '../App.css';
//import Message from './Message';
const FormQuote = props => {

        const [form, setForm] = useState({
            address: '',
            gallons: 0,
            date: '',
            id: ''
        })

        // const [profile, setProfile] = useState({
        //     state : '',
        // });
        const [message, setMessage] = useState(null);

        useEffect(() => {
            ProfileService.getProfile().then(data => {
                setForm({...form, address: `${data.profile.address}, ${data.profile.city} ${data.profile.state} ${data.profile.zipcode}`, id: data.profile._id})
                
            })
        },[]);

        const onChange = e => {
            e.preventDefault();
            console.log(e.target.name, e.target.value)
            setForm({...form, [e.target.name]:e.target.value})
        }

        const onSubmit = e => {
            e.preventDefault();
            console.log('DATA: ', form)
            FormService.postForm(form).then(data => {
                console.log(data)
                const {message} = data;
                if(!message.msgError){
                    setMessage(message);
                }
                else{
                    setMessage(message);
                }
            })
            console.log(form)
        }
        
        const { address, gallons, date} = form;
        
        return (
        <div>
            <Form onSubmit = {onSubmit} className="quoteForm" >
                <FormGroup>
                    <Label for='Gallons'>Gallons Requested</Label>
                    <Input 
                            type='Number'
                            name = 'gallons'
                            value = {gallons}
                            placeholder = 'Number of Gallons'
                            className = 'mb-3'
                            onChange = {onChange} />

                    <Label for ='address'>address</Label>
                    <Input type="text"
                            name="address"
                            className= "mb-3"
                            value = {address}
                            //+", " + form.city + " " + form.state
                            //+ ", " + form.zipcode}
                            disabled
                            onChange={onChange} />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                            type = 'date'
                            name = 'date'
                            value = {date}
                            className = 'mb-3'
                            onChange ={onChange} />

                    <Button type='button' onClick = {onSubmit} className = 'mb-3' block>Get Price</Button>
                    
                    <Label for = 'Suggested Price'>Suggested Price</Label>
                    <Input type="text"
                            name="suggested"
                            className= "mb-3"
                            disabled />

                    <Label for = 'Suggested Price'>Total Amount Due</Label>
                    <Input type="text"
                            name="total"
                            className= "mb-3"
                            disabled/>

                    <Button type='submit' className = 'mb-3' block>Submit Quote</Button>
                    </FormGroup>
            </Form>
        </div>
    );
}

export default FormQuote;