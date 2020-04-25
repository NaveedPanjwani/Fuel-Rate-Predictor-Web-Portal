import React, {useState,  useEffect} from 'react';
import ProfileService from '../Services/ProfileService';
import FormService from '../Services/FormService';
import { getHistory, postHistory } from '../Services/HistoryService';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
} from 'reactstrap';
import '../App.css';

const FormQuote = props => {
  const initialFormState = {
    profileID: '',
    address: '',
    gallons: 0,
    date: '',
    suggested: 0,
    total: 0, 
  }

  const [form, setForm] = useState(initialFormState);
  
  const [historyRate, setHistoryRate] = useState({
      rate_for_history : 0,
  });
  
  const [h, setHistory] = useState({
      gallons: 0,
      address: '',
      date: '',
      suggested: 0,
      total: 0,
      profileID: 0,
  });

  const [histArray, sethistArray ] = useState([]); //array
  const [message, setMessage] = useState(null);

        useEffect(() => {       
            ProfileService.getProfile().then(data => {
                //We need to check if profile exists
                if(data.profile != null){
                    setForm({...form, address: `${data.profile.address}, ${data.profile.city} ${data.profile.state} ${data.profile.zipcode}`, profileID: data.profile._id})
                    setHistory({...h, address:  `${data.profile.address}, ${data.profile.city} ${data.profile.state} ${data.profile.zipcode}`, profileID: data.profile._id})
                }else{
                    console.log("ERROR: NEED A PROFILE ADDRESS")
                }
            });
        },[]);


        useEffect(() => {
            FormService.getForm().then(data => {
                if(data.form != null){
                    setHistoryRate({...historyRate, rate_for_history : .01})
                }else{
                    console.log("ERROR: NEED A PROFILE ADDRESS")
                }
            })
        },[]);

        useEffect(() => {
            getHistory().then(data => {
                sethistArray(data.histArray);
            })
        },[]);

        const onChange = e => {
            e.preventDefault();
            setForm({...form, [e.target.name]:e.target.value})

            setHistory({...h, [e.target.name]: e.target.value})
            
        }
        const onSubmit = e => {
            e.preventDefault();
            FormService.postForm(form).then(data => {
                const {message} = data;
                if(!message.msgError){
                    setMessage(message);
                    setForm(initialFormState);
                }
                else{
                    setMessage(message);
                }
            })
            postHistory(h).then(data => {
            })
        }
        
        const [isError, setError] = useState(false);

        const [dateError, setDateError] = useState(false);
    
        const priceModule = e => {
            
        
            if (form.gallons <= 0){
                setError(true);
            }
            else {
                console.log('setError Else Block');
                setError(false);
            }
            
            if (!form.date){
                setDateError(true);
            }
            else if(new Date(form.date)  < new Date() ){
                setDateError(true);

            }
            else{
              console.log('setDateError Else Block');
                setDateError(false);
            }
           
            console.log("date picked ",new Date(form.date))
            console.log("date picked ",Date())

            let locationfactor;
            let gallons = form.gallons;
            let gallonsRate;
            let currDate = new Date(form.date);
            let rateFluctuation;
            const profit = 0.1;
            let suggested = 0; 
            let total;
            let historyFactor = historyRate.rate_for_history;
            
            let str = form.address;
            if(str.includes("TX")){
                locationfactor = 0.02;
            }
            else{
                locationfactor = 0.04;
            }

            if(gallons > 1000){
                gallonsRate = 0.02;
            }
            else{
                gallonsRate = 0.03;
            }

            if(currDate >= new Date('2020/05/01') && currDate <= new Date('2020/08/30')){
                rateFluctuation = 0.03;
            }else{
                rateFluctuation = 0.04;
            }
         
            console.log("CurrDate: ",currDate)
     
            if(gallons <= 0 || !form.date || currDate  < new Date()){
              console.log('Inside error check', isError, dateError);
              
              suggested = 0;
              total = 0; 
            }
            else {
                suggested = 1.50 + 1.5*(locationfactor - historyFactor + gallonsRate + profit+ rateFluctuation);
                total = suggested * gallons;
                suggested = (Math.round(suggested * 100) / 100).toFixed(2);
                total = (Math.round(total * 100) / 100).toFixed(2);
                
            }

            setForm({...form, suggested: suggested, total: total})
            setHistory({...h, suggested: suggested, total: total }) 
            console.log("final values: ", suggested, total)

        }

        const { address, gallons, date} = form;
        
        return (
        <div>
          <Form className="quoteForm" >
            <FormGroup>
              <Label for="Gallons">Gallons Requested</Label>
                <Input
                  type="Number"
                  name="gallons"
                  value={gallons}
                  placeholder="Number of Gallons"
                  className="mb-3"
                  onChange={onChange}
                />
              {isError ? (<p className="text-danger"> Please enter a valid gallon value</p>) : []}

              <Label for ='address'>Address</Label>
                <Input 
                  type="text"
                  name="address"
                  className="mb-3"
                  value={address}
                  disabled
                  onChange={onChange} 
                />
              <Label for="Date">Delivery Date</Label>
                <Input 
                  type="date"
                  name="date"
                  value={date}
                  className="mb-3"
                  onChange={onChange}
                  required 
                />
              {dateError ? (<p className="text-danger">Please enter a correct date</p>): []}

              <Button type="button" id= "GetPrice" onClick={priceModule} className="mb-3" block>Get Price</Button>

              <Label for = 'Suggested Price'>Suggested Price</Label>
                <Input 
                  type="text"
                  name="suggested"
                  className= "mb-3"
                  value={form.suggested}
                  disabled
                />
              <Label for = 'Total'>Total Amount Due</Label>
                <Input 
                  type="text"
                  name="total"
                  value={form.total}
                  className="mb-3"
                  disabled
                />
              <Button type='submit' onClick = {onSubmit} className = 'mb-3' block>Submit Quote</Button>
            </FormGroup>
          </Form>
        </div>
    );
}

export default FormQuote;