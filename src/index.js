import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TransactionsContext from "./context/transactionsContext/transactionsContext";
import FetchDataContext from './context/fetchDataContext/fetchDataContext';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <TransactionsContext>
      <FetchDataContext>
        <App />
      </FetchDataContext>
    </TransactionsContext>
  </React.StrictMode>,
  document.getElementById('root')
)
