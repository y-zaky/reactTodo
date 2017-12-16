import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      list: ["Buy shopping","Learn React"],
    }
  }

  handleClick() {
    const newState = { ...this.state, list: this.state.list.concat('go out') }

    this.setState(
      {
        list: newState.list
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
          this.state.list
        }
        </p>
      </div>
    );
  }
}


class ToDo extends Component {
  
  render() {
  return (
    <h1 onClick ={() =>  this.props.onClick() } > hello</h1>
  )
}
}



export default App;
