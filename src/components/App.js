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

  filterHogs = () => {
    let result = []
    let all = [...this.state.allHogs]
    if (this.state.showGreased) {
      for (let i = 0; i < all.length; i++) {
        if (all[i].greased) {
          result.push(all[i])
        }
      }
    } else {
      result = all;
    }

    if (this.state.sortName) {
      result.sort((a, b) => a.name > b.name ? 1 : -1)
    }

    if (this.state.sortWeight) {
      result.sort((a, b) => a.weight > b.weight ? 1 : -1)
    }
    
    return result
  }

  render() {
    console.log('app state: ', this.state)
    let filtered = this.filterHogs()
    
    return (
      <div className="App">
        <Nav />
        <button onClick={this.toggleGreased}>Show greased</button>
        <button onClick={this.toggleSortName}>Sort by name</button>
        <button onClick={this.toggleWeight}>Sort by weight</button>
        <HelloWorld />
        {this.state.showGreased || this.state.sortName || this.state.sortWeight 
        ? <HogContainer allHogs={filtered}/>
        :<HogContainer allHogs={this.state.allHogs}/>
        }
        
      </div>
    );
  }
}

export default App;
