import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from './PigContainer'
import Filter from './Filter'

class App extends Component {
  
  state = {
    isGreased: false,
    copiedPigs: [...hogs],
    sortValue: ''
  }

  greasedStatus = () =>  {
    console.log(this.state.isGreased)
    this.setState({
      isGreased: !this.state.isGreased
    })
  }

  sortedStatus = (event) => {
    console.log(this.state.sortValue)
    this.setState({
      sortValue: event.target.value
    }, this.sortPigs)
  }

  sortPigs = () => {
    let pigsArray = [...this.state.copiedPigs]
    if(this.state.sortValue === 'name'){
      pigsArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else if(this.state.sortValue === 'weight'){
      pigsArray.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    } else {
      pigsArray = [...hogs]
    }
    this.setState({
      copiedPigs: pigsArray
    })
  }


  render() {

    const greasedPigs = this.state.copiedPigs.filter(pig => {
      return pig.greased === true
    })

    return (
      <div className="App">
        <Nav />
        <Filter 
          isGreased={this.state.isGreased} 
          greasedStatus={this.greasedStatus}
          sortedStatus={this.sortedStatus}  
        />
        <PigContainer pigs={this.state.isGreased ? greasedPigs : this.state.copiedPigs} />
      </div>
    );
  }
}

export default App;
