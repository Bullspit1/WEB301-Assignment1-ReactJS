import React, { Component } from 'react';
import styles from './Increment.module.css';

import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';


// const Increment = (props) => {
class Increment extends Component {

    render(){
        // console.log(this);
        const { count, increment, decrement } = this.props;
        return (
            <Paper className={styles.paper}>
                <div className={styles.container}>
                    {/* <button onClick={this.increment}>UP</button> */}
                    <Icon onClick={increment} className={styles.icon} style={{ fontSize: 90 }}>keyboard_arrow_up</Icon>
                    <h1>
                    {count}
                    </h1>
                    {count > 0 ? (
                    <Icon onClick={decrement} className={styles.icon} style={{ fontSize: 90 }}>keyboard_arrow_down</Icon>
                    // <button onClick={this.decrement}>Down</button>
                    ) : (
                        " "
                    )}
                </div>
            </Paper>
        );
    }
}
    

export default Increment;