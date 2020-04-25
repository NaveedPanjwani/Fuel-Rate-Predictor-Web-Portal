import React, {useState,  useEffect} from 'react';
import { Table } from 'reactstrap';
import { getHistory } from '../Services/HistoryService';
import HistoryList from '../components/HistoryList';

const History = () => {
  const [historyArray, sethistoryArray ] = useState([]);

  useEffect(() => {
    getHistory().then(data => {
        sethistoryArray(data.history);
    })
  },[]);

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
          <th>Delivery Address</th>
          <th>Delivery Date</th>
          <th>Gallons</th>
          <th>Suggested Price</th>
          <th>Total Due</th>
          </tr>
        </thead>
        <HistoryList historyList={historyArray} />
      </Table>
    </div>
  );
};

export default History;