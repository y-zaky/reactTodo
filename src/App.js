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
    const clicked = {...this.state}

    this.setState(
      {
        clicked: !clicked.clicked
      }
    )
    
  }

  render() {
    
    return (
      <div className='App'>
        <ToDo 
          value={ 'bang' } 
          onClick={ () => this.handleClick() }
        />
        <p>
        {
          this.state.clicked.toString()
        }
        </p>
      </div>
    );
  }
}


function ToDo (props) {
  return (
    <h1 onClick ={() =>  props.onClick() } > hello</h1>
  )
}

export default App;
