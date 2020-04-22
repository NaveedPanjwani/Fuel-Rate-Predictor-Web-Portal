import React, {useState,  useEffect} from 'react';
import ProfileService from '../Services/ProfileService';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
} from 'reactstrap';
import '../App.css';
//import Message from './Message';


import FormService from '../Services/FormService';

const FormQuote = props => {

        const [form, setForm] = useState({
            address: '',
            gallons: '',
            deliveryDate: '',
        })

        const [message, setMessage] = useState(null);

          
        useEffect(() => {
            ProfileService.getProfile().then(data => {
                setForm(data.profile)
            })
        },[]);

        const onChange = e => {
            e.preventDefault();
            setForm({...form, [e.target.name]:[e.target.value]})
        }

        const onSubmit = e => {
            e.preventDefault();
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

        // const priceModule = () =>{
            
        // }

        return (
        <div>
            <Form onSubmit = {onSubmit} className="quoteForm" >
                <FormGroup>
                    <Label for='Gallons'>Gallons Requested</Label>
                    <Input 
                        type='number'
                        name = 'gallons'
                        value = {form.gallons}
                        placeholder = 'Number of Gallons'
                        className = 'mb-3'
                        onChange = {onChange}    
                    />

                    <Label for ='address'>address</Label>
                    <Input type="text"
                            name="address"
                            className= "mb-3"
                            value = {form.address +", " + form.city + " " + form.state
                            + ", " + form.zipcode}
                            disabled
                            onChange={onChange}
                    />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                        type = 'date'
                        name = 'date'
                        value = {form.deliveryDate}
                        className = 'mb-3'
                        onChange ={onChange}     
                    />

                    <Button type='button' onClick = {onSubmit} className = 'mb-3' block>Get Price</Button>
                    
                    <Label for = 'Suggested Price'>Suggested Price</Label>
                    <Input type="text"
                            name="suggested"
                            className= "mb-3"
                            disabled
                    />

                    <Label for = 'Suggested Price'>Total Amount Due</Label>
                    <Input type="text"
                            name="total"
                            className= "mb-3"
                            disabled
                    />

                    <Button type='submit' className = 'mb-3' block>Submit Quote</Button>
                    </FormGroup>
            </Form>
        </div>
    );
}

export default FormQuote;