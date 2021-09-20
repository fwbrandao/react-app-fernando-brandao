import React, { createContext, useState } from 'react';
import moment from 'moment';

export const TransactionsContext = createContext(() => { });

const TransactionsProvider = (props) => {
  const [userId, setUserId] = useState("");

  // Formats the data with the correct fields
  const createData = (user_id, timestamp, currency, amount) => {
    return { user_id, timestamp, currency, amount };
  }

  // Format timestamp YYYY-MM-DD
  const formatDateTime = (timestamp) => {
    return moment(timestamp).format('YYYY-MM-DD');
  }

  return (
    <TransactionsContext.Provider
      value={{ formatDateTime, createData, setUserId, userId }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;