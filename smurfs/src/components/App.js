import React, { Component } from "react";
import "./App.css";

//components
import SmurfContainer from './SmurfContainer'
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm /> 
        <SmurfContainer />
      </div>
    );
  }
}

export default App;
