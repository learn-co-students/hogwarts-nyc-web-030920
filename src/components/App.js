import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from './PigContainer'
import Filter from './Filter'

class App extends Component {
  
  state = {
    isGreased: false,
    copiedPigs: [...hogs]
  }

  greasedStatus = () =>  {
    console.log(this.state.isGreased)
    this.setState({
      isGreased: !this.state.isGreased
    })
  }

  greasedPigsOnly = () => {
    this.state.copiedPigs.filter(pig => pig.greased)
  }
  
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter isGreased={this.state.isGreased} greasedStatus={this.greasedStatus} />
        <PigContainer pigs={hogs} />
      </div>
    );
  }
}

export default App;
