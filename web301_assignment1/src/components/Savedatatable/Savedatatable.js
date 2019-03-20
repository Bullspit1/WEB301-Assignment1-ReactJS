import React from 'react';

import Savedata from '../Savedata/Savedata';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


    const Savedatatable = (props) => {
        const { savedData } = props;
        return (
            <Paper>
                <Table>
                    <TableHead style={{ background:'black' }}>
                        <TableRow>
                            <TableCell style={{ color:'white' }}> Name </TableCell>
                            <TableCell style={{ color:'white' }}> Count </TableCell>
                        </TableRow>
                    </TableHead>
                        {
                        savedData.eachTable.map((dataObj, key) => <Savedata key={key} val={dataObj.name} count={dataObj.count}/>)
                        }
                </Table>
            </Paper>
        );
    };

    // {name.length === 0 ? (
    //     alert("Please insert a name")
    //     ) : (
    //     savedData.eachTable.map((dataObj, key) => <Savedata key={key} val={dataObj.name} count={dataObj.count}/>)
    //     )}

export default Savedatatable;