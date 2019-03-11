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

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


//Components
// import Increment from './components/Increment/Increment';
import Saves from './components/Saves/Saves';
// import Submission from './components/Submission/Submission';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        value: "",
        click: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendInfo =this.sendInfo.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}

handleChange(e){
  e.preventDefault();
  // console.log(e.target.value);
  this.setState({
      value: e.target.value,
  });
}

sendInfo(e){
  e.preventDefault();
  console.log(this.state.value); 
  console.log(this.state.count);
//   this.setState({
//     value: this.state.value,
//   });
}

increment(e){
  // const { count } = this.state;
  e.preventDefault();
  // console.log(this.state.count +1);
  this.setState({
      count : this.state.count + 1,
  });
}

decrement(e){
  e.preventDefault();
  // console.log(this.state.count <= 0);
  // if(this.state.count <= 0){
  //     this.state.show = true;
  // }
  this.setState({
      count : this.state.count - 1,
  });
}


  render() {
    const { count } = this.state;
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
            <Paper>
                <div className={styles.container}>
                {/* <button onClick={this.increment}>UP</button> */}
                <i onClick={this.increment} className="material-icons">keyboard_arrow_up</i>
                <h1>
                {count}
                </h1>
                {count > 0 ? (
                    <i onClick={this.decrement} className="material-icons">keyboard_arrow_down</i>
                    // <button onClick={this.decrement}>Down</button>
                  ) : (
                      " "
                  )}
                </div>
            </Paper>
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
                        <Saves val={this.state.value} count={this.state.count}/>
                    </TableBody>
                </Table>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
          <Paper>
            <TextField
          id="standard-with-placeholder"
          label="Name"
          placeholder=""
          margin="normal"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.btnContainer}>
        <Button variant="contained" color="primary" onClick={this.sendInfo}>Primary</Button>
        </div>
            </Paper>
          </Grid>
          </Grid>
      </div>
      
      </div>
    );
  }
}

export default App;
