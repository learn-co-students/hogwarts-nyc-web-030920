import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";



class App extends Component {

  state = {
    allHogs: hogs,
    greased: false,
    alphabetical: false,
    weighted: false
  }

  getGreased = () => {
    this.setState({
      allHogs: hogs.filter(hog => hog.greased),
      greased: true,
      alphabetical: false,
      weighted: false
    })
  }

  getAllHogs = () => {
    this.setState({
      allHogs: hogs,
      greased: false,
      alphabetical: false,
      weighted: false
    })
  }

  sortAlphabetically = () => {
    this.setState({
      hogs: this.state.allHogs.sort((a, b) => (a.name > b.name) ? 1 : -1),
      alphabetical: true
    })
  }
  sortByWeight = () => {
    this.setState({
      hogs: this.state.allHogs.sort((a, b) => (a.weight > b.weight) ? -1 : 1),
      weighted: true
    })
  }

  toggleAlphabetical = () => {
    this.setState({
      alphabetical: !this.state.alphabetical
    })
  }
  toggleWeighted = () => {
    this.setState({
      weighted: !this.state.weighted
    })
  }



  render() {
    console.log('App State :>> ', this.state);
    return (
      <div className="App">
        <Nav />
        {this.state.greased ? 
        <button onClick={this.getAllHogs}>Show All Hogs</button> :
        <button onClick={this.getGreased}>Get Greasy Hogs</button> 
        }
        {this.state.alphabetical ? 
        <button onClick={this.getAllHogs}>Show Unsorted</button> :
        <button onClick={this.sortAlphabetically}>Sort Alphabetically</button> 
        }
        {this.state.weighted ? 
        <button onClick={this.getAllHogs}>Show Unsorted</button> :
        <button onClick={this.sortByWeight}>Sort By Weight</button> 
        }

        
        <HogContainer hogs={this.state.allHogs} />
      </div>
    );
  }
}

export default App;
