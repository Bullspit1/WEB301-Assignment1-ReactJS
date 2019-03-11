import React, { Component } from 'react';
// import styles from './Saves.module.css';

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Saves extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //         // show: false,
    //     };
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }

    render(){
        console.log(this);
        // const { count } = this.state;
        // console.log(count);
        return (
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

                        }
                        {/* <TableRow>
                            <TableCell> Cell 1 </TableCell>
                            <TableCell> Cell 2 </TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
    

export default Saves;