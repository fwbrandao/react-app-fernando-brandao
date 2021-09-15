import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
}from '@material-ui/core';
import uniqid from 'uniqid';
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

  function createData(user_id, timestamp, currency, amount) {
    return { user_id, timestamp, currency, amount };
  }

  const rows =
    smallData.map(data => createData(
      data.user_id,
      data.timestamp,
      data.currency,
      data.amount
    ));

  // Format timestamp
  const formatDateTime = (timestamp) => {
    return moment(timestamp).format('YYYY-MM-DD');
  }

  // Format the color for negative or positive values
  const formatAmount = (amount) => {
    return amount[0] === '-' ? classes.negativeAmount : classes.positiveAmount
  }

  return (
    <Box>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Small Dataset
      </Typography>
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
              <StyledTableRow key={uniqid()}>
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
    </Box>
  );
}
