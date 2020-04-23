import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import FormQuote from './FormQuote';

class History extends Component {

    render() {
        return (
        <div>
        <Table striped>
            <thead>
                <tr>
                <th>Order #</th>
                <th>Gallons</th>
                <th>Delivery Address</th>
                <th>Date</th>
                <th>Suggested Price</th>
                <th>Total Due</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>50</td>
                <td>value here</td>
                <td>Fri Sep 18 2020 00:01:44</td>
                <td>2,000</td>
                <td>10,500</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <th scope="row">2</th>
                <td>65</td>
                <td>Stephany Keys Houston, Tx</td>
                <td>Sat Aug 18 2020 00:02:14</td>
                <td>3,000</td>
                <td>7,500</td>
                </tr>
            </tbody>
            </Table>
            </div>
        )
    }
}

export default History;