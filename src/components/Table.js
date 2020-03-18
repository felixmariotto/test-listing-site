
import React, {useState} from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SocketContext from './socket-context' ;


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, address, amount) {
  return { name, address, amount };
}

export default function GeneralTable() {

  const classes = useStyles();

  const [ rows, setRows ] = useState([]);

  return (

    <SocketContext.Consumer>

      { (socket)=> {

        socket.on('tableInfo', (message)=> {

          console.log( message );

          setRows( message );

        });

        return (

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Landlord</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">Amount Robbed&nbsp;(hkd)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name + Math.random().toFixed(5) }>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        );

      }}

    </SocketContext.Consumer>

  );

};


/*

class GeneralTable extends React.Component {

  render() {

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Landlord</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Amount Robbed&nbsp;(hkd)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name + Math.random().toFixed(5) }>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

};


const GeneralTableWithSocket = function( props ) {

  const classes = useStyles();

  return (
    <SocketContext.Consumer>
      { socket => <GeneralTable {...props} socket={socket} /> }
    </SocketContext.Consumer>
  );

};


export default GeneralTableWithSocket ;

*/

