import React, { Component } from 'react';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
} from 'reactstrap';

class FormQuote extends Component {

    constructor(props){
        super(props) 
            this.state = {
                gallons: 0,
                date : '',
                texas: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log("Final Data is: ", data)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // componentDidMount(){
    //     this.setState({
            
    //     })
    // }

    render() {
        return (
            <div>
            <Form onSubmit= {this.onSubmit} className = 'Quote'>
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
                        type='date'
                        name ='date'
                        className = "mb-3"
                        onChange = {this.onChange}
                    />

                    {/* <legend>Are you located in the state of Texas?</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="texas" onChange = {this.onChange}/>{' '}
                         Yes
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="texas" onChange = {this.onChange} />{' '}
                         No
                    </Label>
                    </FormGroup> */}

                    <Button type='submit'>Submit</Button>

                    </FormGroup>
            </Form>
        </div>
        );
    }
}

export default FormQuote;