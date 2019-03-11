import React, { Component } from 'react';
import styles from './App.module.css';


//Matirial-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


//Components
import Increment from './components/Increment/Increment';
// import Saves from './components/Saves/Saves';
import Submission from './components/Submission/Submission';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        val: "",
    };
}

  render() {
    console.log(this);
    return (
      <div className={styles.app}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Content */}
      <div className={styles.container}>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Increment />
          </Grid>
          <Grid item xs={6}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Table 1 </TableCell>
                            <TableCell> Table 2 </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        <TableRow>
                            {/* <TableCell> {this.state.val} </TableCell> */}
                            {/* <TableCell> {this.state.count} </TableCell> */}
                        </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Submission />
          </Grid>
          </Grid>
      </div>
      
      </div>
    );
  }
}

export default App;
