import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      clicked: false 
    }
  }

  handleClick() {
console.log(this.state)
  }

  render() {
    return (
      <div className='App'>
        <ToDo />
      </div>
    );
  }
}


function ToDo () {
  return (
    <h1 onClick ={ () =>  (console.log('hello'))} >hello</h1>
  )
}

export default App;
