import './App.css';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { loadAllVulnerabilities, selectAllVulnerabilities } from './redux/vulnerability';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllVulnerabilities());
  }, [dispatch]);

  const allVulnerabilities = useSelector(selectAllVulnerabilities);

  console.log(allVulnerabilities);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vulnerability Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Risk Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!allVulnerabilities ? allVulnerabilities.map(vulnerability =>
              <TableRow key={vulnerability.id}>
                <TableCell>{vulnerability.id}</TableCell>
                <TableCell>{vulnerability.title}</TableCell>
                <TableCell>{vulnerability.riskRating}</TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
