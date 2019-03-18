import React from 'react';
import styles from './Submission.module.css';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';



// class Submission extends Component {
const Submission = (props) => {
    // render(){
        // console.log(props);
        // const { count } = this.state;
        // console.log(count);
        return (
        <Paper className={styles.paper}>
            <Grid container spacing={24} className={styles.container}>
            <Grid item xs={6} className={styles.txt}>
                <TextField
                id="filled-with-placeholder"
                label="Name"
                placeholder=""
                style={{ margin: 5 }}
                margin="normal"
                variant="filled"
                fullWidth
                value={props.value}
                onChange={props.handleChange}
                />
                </Grid>
                <Grid item xs={6} className={styles.btn}>
                <div className={styles.btnContainer}>
                    <Button size="large" variant="contained" style={{ background: '#2196f3', color: '#fff' }} onClick={props.sendInfo}>Primary</Button>
                </div>
                </Grid>
            </Grid>
        </Paper>
        );
    // }
}
    

export default Submission;