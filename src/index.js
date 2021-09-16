import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TransactionsContext from "./context/transactionsContext/transactionsContext";
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <TransactionsContext>
      <App />
    </TransactionsContext>
  </React.StrictMode>,
  document.getElementById('root')
)
