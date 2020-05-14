import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from './HogContainer';

class App extends Component {

  state = {
    allHogs: hogs,
    showGreased: false,
    sortName: false,
    sortWeight: false
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  toggleSortName = () => {
    this.setState({
      sortName: !this.state.sortName
    })
  }

  toggleWeight = () => {
    this.setState({
      sortWeight: !this.state.sortWeight
    })
  }

  render() {
    console.log('app state: ', this.state)
    let allHog = [...this.state.allHogs]

    
    
    return (
      <div className="App">
        <Nav />
        <button onClick={this.toggleGreased}>Show greased</button>
        <button onClick={this.toggleSortName}>Sort by name</button>
        <button onClick={this.toggleWeight}>Sort by weight</button>
        <HelloWorld />
        <HogContainer allHogs={this.state.allHogs}/>
      </div>
    );
  }
}

export default App;
