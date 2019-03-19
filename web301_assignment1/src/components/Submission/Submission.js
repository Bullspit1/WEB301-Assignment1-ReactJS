import React from 'react';
import styles from './Submission.module.css';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';



const Submission = (props) => {
        return (
        <Paper className={styles.paper}>
        <form onSubmit={props.sendInfo}>
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
                    <Button type='submit' size="large" variant="contained" style={{ background: '#2196f3', color: '#fff' }}>Primary</Button>
                </div>
                </Grid>
            </Grid>
        </form>
        </Paper>
        );
    // }
}
    

export default Submission;