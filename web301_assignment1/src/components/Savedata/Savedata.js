import React from 'react';
// import styles from './Savedata.module.css';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

    const Savedata = (props) => {
        const { count, val } = props;
        return (
            <TableBody>
                {
                    val === "" ? (
                    null
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