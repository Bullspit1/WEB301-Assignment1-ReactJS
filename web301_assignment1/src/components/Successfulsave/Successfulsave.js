import React, { Component } from 'react';
// import styles from './SuccessfulSave.module.css';

import Snackbar from '@material-ui/core/Snackbar';



// const Increment = (props) => {
class SuccessfulSave extends Component {
    render(){
        // console.log(this.props.savedData);
        // console.log(this.props.open);
        // console.log(this.props.clear);
        // savedData.eachTable.map((dataObj, key ) => <Savedata key={key} val={dataObj.name} count={dataObj.count}/>)
        // console.log(this.props.increment);
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