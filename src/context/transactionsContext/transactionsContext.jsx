import React, { } from 'react';
import moment from 'moment';

export const TransactionsContext = React.createContext(() => { });

const TransactionsProvider = (props) => {

  // Formats the data with the correct fields
  const createData = (user_id, timestamp, currency, amount) => {
    return { user_id, timestamp, currency, amount };
  }

  // Format timestamp YYYY-MM-DD
  const formatDateTime = (timestamp) => {
    return moment(timestamp).format('YYYY-MM-DD');
  }

  return (
    <TransactionsContext.Provider value={{ formatDateTime, createData }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;