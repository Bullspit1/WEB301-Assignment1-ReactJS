import React, { Component } from 'react';
import styles from './App.module.css';

import Increment from './components/Increment/Increment'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <Increment />
      </div>
    );
  }
}

export default App;
