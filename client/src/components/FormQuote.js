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
const FormQuote = props => {

        const [form, setForm] = useState({
            profileID: '',
            address: '',
            gallons: 0,
            data: '',
            suggested: 0,
            total: 0
        })
        const [history, setHistory] = useState({
            rate_for_history : 0,
        }
        )
        const [message, setMessage] = useState(null);

        useEffect(() => {       
            ProfileService.getProfile().then(data => {
                //We need to check if profile exists
                console.log(data.profile)
                if(data.profile != null){
                    setForm({...form, address: `${data.profile.address}, ${data.profile.city} ${data.profile.state} ${data.profile.zipcode}`, profileID: data.profile._id})
                }else{
                    console.log("ERROR: NEED A PROFILE ADDRESS")
                }
            });

        },[]);


        useEffect(() => {
            FormService.getForm().then(data => {
                console.log(data.form)
                if(data.form != null){
                    setHistory({...history, rate_for_history : .01})
                }else{
                    console.log("ERROR: NEED A PROFILE ADDRESS")
                }
            })
        },[]);

        const onChange = e => {
            e.preventDefault();
            //console.log(e.target.name, e.target.value)
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
        
    
        const priceModule = e => {
       
            var locationfactor;
            var gallons = form.gallons;
            var gallonsRate;
            var currDate = new Date(form.date);
            var rateFluctuation;
            const profit = 0.1;
            var suggested; 
            var total;
            var historyFactor = history.rate_for_history;
            console.log('RATE HISTORY:' + historyFactor)

            var str = form.address;
            if(str.includes("TX")){
                locationfactor =.02;
            }
            else{
                locationfactor =.04;
            }
            console.log("Current location factor: " + locationfactor);

            if(gallons > 1000){
                gallonsRate = 0.02
            }else{
                gallonsRate = 0.03;
            }
            console.log("GallonsRate: " + gallonsRate);

            console.log((currDate))
            console.log(Date('2020/05/01'))
            if(currDate >= new Date('2020/05/01') && currDate <= new Date('2020/08/30')){
                rateFluctuation = 0.03;
            }else{
                rateFluctuation = 0.04;
            }
            console.log("FluctuationRate: " + rateFluctuation);
            console.log("History Factor: " + historyFactor)

            suggested = 1.50 + 1.5*(locationfactor - historyFactor + gallonsRate + profit+ rateFluctuation);
            console.log("Suggested price:  " + suggested);
            total = suggested * gallons;
            console.log("total price:  " + total);

            setForm({...form, suggested: suggested, total: total })
            
        }

        const { address, gallons, date} = form;
        
        return (
        <div>
            <Form className="quoteForm" >
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
                            disabled
                            onChange={onChange} />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                            type = 'date'
                            name = 'date'
                            value = {date}
                            className = 'mb-3'
                            onChange ={onChange} />

                    <Button type='button' onClick={priceModule} className = 'mb-3' block>Get Price</Button>

                    

                    <Label for = 'Suggested Price'>Suggested Price</Label>
                    <Input type="text"
                            name="suggested"
                            className= "mb-3"
                            value = {form.suggested}
                            disabled />

                    <Label for = 'Total'>Total Amount Due</Label>
                    <Input type="text"
                            name="total"
                            value = {form.total}
                            className= "mb-3"
                            disabled/>

                    <Button type='submit' onClick = {onSubmit} className = 'mb-3' block>Submit Quote</Button>
                    </FormGroup>
            </Form>
        </div>
    );
}

export default FormQuote;