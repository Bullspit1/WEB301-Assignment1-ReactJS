import React from 'react';
// import styles from './Savedata.module.css';

// import Paper from '@material-ui/core/Paper';

// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

    const Savedata = (props) => {
        // console.log(props.val);
        const { count, val } = props;
        // console.log(val.length === 0);
        return (
            //If statement here if value.length === 0 alert please insert a name
            //the val prop needs to be changed to somthing thta has one value only
            <TableBody>
                {
                    val === "" ? (
                console.log('nothing')
                    ) : (
                <TableRow>
                    <TableCell> {val} </TableCell>
                    <TableCell> {count} </TableCell>
                </TableRow>
                    )
                }
             </TableBody>
        );
};
    

export default Savedata;