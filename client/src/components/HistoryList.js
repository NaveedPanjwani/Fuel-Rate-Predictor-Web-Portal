import React from 'react';
import HistoryItem from './HistoryItem';

const HistoryList = ({ historyList }) => {
  console.log(historyList);
  return (
    <>
      {
        historyList.map((hist, index) => (
          <HistoryItem key={index} histItem={hist} />
        ))
      }
    </>
  );
};

export default HistoryList;
