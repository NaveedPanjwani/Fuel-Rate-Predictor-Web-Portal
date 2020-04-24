import React from 'react';

const HistoryItem = ({ histItem }) => {
    const { address, date, gallons, suggested, total } = histItem;
    return (
      <>
        <tbody>
          <td>{address}</td>
          <td>{date}</td>
          <td>{gallons}</td>
          <td>{suggested}</td>
          <td>{total}</td>
        </tbody>
      </>
    );
};

export default HistoryItem;