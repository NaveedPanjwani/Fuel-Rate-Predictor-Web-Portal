import React, { Component } from 'react';
import {
    Button,
    Form, 
    FormGroup,
    Label, 
    Input,
    Col,
    Row
} from 'reactstrap';
import './index.css'

class FormQuote extends Component {

    render() {
        return (
            <div>
            <Form onSubmit= {this.onSubmit} className='Quote'>
                <FormGroup>
                    <Label for="Gallons">Gallons Requested</Label>
                    <Input 
                        type='number'
                        name = 'gallons'
                        id = 'gallons'
                        placeholder = 'Number of Gallons'
                        className = 'mb-3'
                        onChange = {this.onChange}
                    />
                    
                    <Label for= 'Date'>Delivery Date</Label>
                    <Input 
                        type="date"
                        name ="date"
                        id ="date"
                        className = "mb-3"
                    />

                    <Label for='Address'>Address</Label>
                    <Input 
                        type="text" 
                        name="address" 
                        id="exampleAddress" 
                        placeholder="4800 Calhoun Rd"
                        className = "mb-3"
                    />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Button color="primary" size="lg">Get Quote</Button>{' '}
                    <Button color="secondary" size="lg" type='reset'>Reset</Button>
            </Form>
        </div>
        )
    }
}

export default FormQuote;