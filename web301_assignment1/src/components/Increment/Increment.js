import React, { Component } from 'react';
import styles from './Increment.module.css';

import Paper from '@material-ui/core/Paper';


class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // show: false,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
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

    render(){
        // console.log(this);
        const { count } = this.state;
        // console.log(count);
        return (
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
        );
    }
}
    

export default Increment;