import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  negativeAmount: {
    color: 'red'
  },
  positiveAmount: {
    color: 'green'
  }
});

export default function SmallTransactionTable() {
  const classes = useStyles();

  const [smallData, setSmallData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions-small.json") // Fetch small dataset
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSmallData(data);
      });
  }, []);

  console.log('smalldata', smallData);

  function createData(user_id, timestamp, currency, amount) {
    return { user_id, timestamp, currency, amount };
  }

  const rows =
    smallData.map(data => createData(
      data.user_id,
      data.timestamp,
      data.currency,
      data.amount
    ))
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    ;

  console.log('rows', rows);

  // Formats timestamp
  const formatDateTime = (timestamp) => {
    return moment(timestamp).format('YYYY-MM-DD');
  }

  // Format the color for negative or positive values
  const formatAmount = (amount) => {
    return amount[0] === '-' ? classes.negativeAmount : classes.positiveAmount
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="left">GBP</StyledTableCell>
            <StyledTableCell align="left">USD</StyledTableCell>
            <StyledTableCell align="left">EUR</StyledTableCell>
            <StyledTableCell align="left">Last Activity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.user_id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell
                align="left"
              >
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell
                align="left"
                className={formatAmount(row.amount)}
              >
                {row.currency === "GBP" ? row.amount : null}
              </StyledTableCell>
              <StyledTableCell
                align="left"
                className={formatAmount(row.amount)}
              >
                {row.currency === "USD" ? row.amount : null}
              </StyledTableCell>
              <StyledTableCell
                align="left"
                className={formatAmount(row.amount)}
              >
                {row.currency === "EUR" ? row.amount : null}
              </StyledTableCell>
              <StyledTableCell
                align="left"
              >
                {formatDateTime(row.timestamp)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
