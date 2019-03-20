import React, { Component } from 'react';
import styles from './App.module.css';


//Matirial-UI
import Grid from '@material-ui/core/Grid';


//Components
import Increment from './components/Increment/Increment';
import Submission from './components/Submission/Submission';
import Navbar from './components/Navbar/Navbar';
import Savedatatable from './components/Savedatatable/Savedatatable';
import SuccessfulSave from './components/Successfulsave/Successfulsave';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      open: false,
        liveData: {
          name: "",
        },
        savedData: {
          eachTable: [],
        }
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendInfo =this.sendInfo.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.closeTab = this.closeTab.bind(this);
}

handleChange(e){
  e.preventDefault();
  // console.log(e.target.value);
  this.setState({
    liveData: {
      name: e.target.value,
    },   
  });
}

sendInfo(e){
  const { liveData, savedData, count} = this.state;
  e.preventDefault();
  // console.log(this.state.name); 
  // console.log(this.state.count);
  // console.log(savedData.eachTable);
  this.setState({
    eachTable: savedData.eachTable.push({name: liveData.name, count: count}),
    open: true,
    count: 0,
  });
  const timer = setTimeout(() => {
    clearTimeout(timer);
    this.setState({
        open: false,
    });
  }, 5000);
}

closeTab() {
  this.setState({
    open: false,
  });
}

increment(e){
  const { count } = this.state;
  e.preventDefault();
  // console.log(this.state.count +1);
  this.setState({
      count : count + 1,
  });
}

decrement(e){
  const { count } = this.state;
  e.preventDefault();
  this.setState({
      count : count - 1,
  });
}


  render() {
    const { liveData, savedData, count, open } = this.state;
    return (
      <div className={styles.app}>
      <Navbar />
      {/* Content */}
      <div className={styles.container}>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Increment count={count} increment={this.increment} decrement={this.decrement}/> 
            <br></br>
            <br></br>
            <Submission sendInfo={this.sendInfo} handleChange={this.handleChange} value={liveData.name}/>
          </Grid>
          <Grid item xs={6}>
            <Savedatatable savedData={savedData} name={liveData.name}/>
          </Grid>
          </Grid>
      </div>
        <SuccessfulSave savedData={savedData.eachTable} open={open} clear={this.closeTab}/>
      </div>
    );
  }
}

export default App;


/*By: Stephen Ditta
ID: 033787144
Date: 03/19/19
Proffesor: Eric Chen
*/

