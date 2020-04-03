import React, { Component } from 'react';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
} from 'reactstrap';
import axios from 'axios'
class FormQuote extends Component {

    constructor(props){
        super(props) 
            this.state = {
                gallons: 0,
                deliveryAdress: '1234 main st',
                date : '',
                suggested: 0,
                total: 0
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log("Final Data is: ", data)

        axios.post('http://localhost:4000/api/forum/me', data)
        .then(res => console.log(res.data))
    }

    // componentDidMount(){
    //     this.setState({
            
    //     })
    // }

    render() {
        return (
            <div>
            <Form onSubmit= {this.onSubmit}>
                <FormGroup>
                    <Label for='Gallons'>Gallons Requested</Label>
                    <Input 
                        type='number'
                        name = 'gallons'
                        placeholder = 'Number of Gallons'
                        className = 'mb-3'
                        onChange = {this.onChange}
                    />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                        type = 'date'
                        name = 'date'
                        className = 'mb-3'
                        onChange = {this.onChange}
                    />

                    <Button type='submit' class = 'mb-3'>Submit</Button>

                    </FormGroup>
            </Form>
        </div>
        );
    }
}

export default FormQuote;