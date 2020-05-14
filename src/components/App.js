import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer';

class App extends Component {

  state = {
    allHogs: hogs,
    showGreased: false,
    sort: ''
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  handleSeletion = (event) => {
    this.setState({
      sort: event.target.value
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

    if (this.state.sort === 'name') {
      result.sort((a, b) => a.name > b.name ? 1 : -1)
    }else if (this.state.sort === 'weight') {
      result.sort((a, b) => a.weight > b.weight ? 1 : -1)
    }

    return result
  }

  render() {
    let filtered = this.filterHogs()
   
    return (
      <div className="App">
        <Nav />
        <button onClick={this.toggleGreased}>{this.state.showGreased ? 'greased hogs':'all hogs'}</button>
        <select onChange={this.handleSeletion}>
          <option value='' >none</option>
          <option value='name' >name</option>
          <option value='weight'>weight</option>
        </select>
        <br/><br/><br/>
        <HogContainer allHogs={filtered}/>
      </div>
    );
  }
}

export default App;
