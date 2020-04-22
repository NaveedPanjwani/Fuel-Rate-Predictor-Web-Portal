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

const FormQuote = propr => {

        const [form, setForm] = useState({
            address: '',
        })
          
        useEffect(() => {
            ProfileService.getProfile().then(data => {
                setForm(data.profile)
            })
        },[]);

        return (
        <div>
            <Form className="quoteForm" >
                <FormGroup>
                    <Label for='Gallons'>Gallons Requested</Label>
                    <Input 
                        type='number'
                        name = 'gallons'
                        placeholder = 'Number of Gallons'
                        className = 'mb-3'    
                    />

                    <Label for ='address'>address</Label>
                    <Input type="text"
                            name="address"
                            className= "mb-3"
                            value = {form.address +", " + form.city + " " + form.state
                            + ", " + form.zipcode}
                            disabled
                    />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                        type = 'date'
                        name = 'date'
                        className = 'mb-3'     
                    />

                    <Button type='submit' className = 'mb-3' block>Get Price</Button>
                    
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