import React from 'react';
// import styles from './Navbar.module.css';

//Matirial-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const Navbar = (props) => {
    return(
      <AppBar style={{ background: '#2196f3' }} position="static">
      <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
      <i className="material-icons menuBtn">menu</i>
      </IconButton>
        <Typography variant="h6" color="inherit">
            Counter App
        </Typography>
      </Toolbar>
    </AppBar>
    );
}

export default Navbar;