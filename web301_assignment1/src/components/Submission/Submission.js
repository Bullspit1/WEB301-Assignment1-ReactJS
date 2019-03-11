import React, { Component } from 'react';
import styles from './Submission.module.css';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';



class Submission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
            // show: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendInfo =this.sendInfo.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        // console.log(e.target.value);
        this.setState({
            val: e.target.value,
        });
    }

    sendInfo(){
        console.log('Sent info'); 
        // this.setState({

        // });
    }

    render(){
        console.log(this);
        // const { count } = this.state;
        // console.log(count);
        return (
            <Paper>
            <TextField
          id="standard-with-placeholder"
          label="Name"
          placeholder=""
          margin="normal"
          value={this.state.val}
          onChange={this.handleChange}
        />
        <div className={styles.btnContainer}>
        <Button variant="contained" color="primary" onClick={this.sendInfo}>Primary</Button>
        </div>
            </Paper>
        );
    }
}
    

export default Submission;