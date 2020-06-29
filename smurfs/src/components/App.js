import React, { Component } from "react";
import "../css/index.css";
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="smurf-info">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <p>Welcome to your state management version of Smurfs!</p>
        <p>Start inside of your `src/index.js` file!</p>
        <p>Have fun!</p>
    </div>*/}
        <SmurfList />
      </div>
    );
  }
}

export default App;
