import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Buy shopping", "Learn React"]
    };
  }

  handleClick() {
    const newState = { ...this.state, list: this.state.list.concat("go out") };

    this.setState({
      list: newState.list
    });
  }

  render() {
    return (
      <div className="App">
        <ToDo value={"bang"} onClick={() => this.handleClick()} />

        <Renderlist value={this.state.list} />
      </div>
    );
  }
}

class ToDo extends Component {
  render() {
    return (
      <div>
       <label>
         Add toDO: 
       <input type = 'text' placeholder = 'What do you need to do?'/>
       </label>
       <button onClick={() => this.props.onClick()}> Submit</button>
       
      </div>
    )
  }
}

function Renderlist (toDos) {
    console.log('todos',toDos)
   return (
      toDos.value.map( (toDo,index) => {
        return ( <p key={index}>{toDo}</p> )
      })
    )
}

export default App;
