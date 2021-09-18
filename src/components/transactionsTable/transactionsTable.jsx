import React, { useContext } from 'react';
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
  Paper,
  TablePagination
} from '@material-ui/core';
import uniqid from 'uniqid';
import { TransactionsContext } from '../../context/transactionsContext/transactionsContext';
import { FetchDataContext } from '../../context/fetchDataContext/fetchDataContext';

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

export default function TransactionTable() {
  const classes = useStyles();
  const { formatDateTime, createData } = useContext(TransactionsContext);
  const { allData } = useContext(FetchDataContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows =
    allData.map(data => createData(
      data.user_id,
      data.timestamp,
      data.currency,
      data.amount
    ));

  // Format the color for negative or positive values
  const formatAmount = (amount) => {
    return amount[0] === '-' ? classes.negativeAmount : classes.positiveAmount
  }

  return (
    <Box>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        All Transactions
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
