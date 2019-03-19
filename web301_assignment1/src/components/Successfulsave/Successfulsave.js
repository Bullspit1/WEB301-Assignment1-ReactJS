import React, { Component } from 'react';
// import styles from './SuccessfulSave.module.css';

import Snackbar from '@material-ui/core/Snackbar';



class SuccessfulSave extends Component {
    render(){
        return (
            <Snackbar
            variant="success"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}}
          open={this.props.open}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span>Saved to the data table</span>}
          action={
            <i className="material-icons"
            onClick={this.props.clear}
            >clear</i>
          }
        />
        );
    }
}

    

export default SuccessfulSave;