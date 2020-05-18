import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigsComponent from "./PigsComponent";
import FilterPigsComponent from "./FilterPigsComponent";
import FilterPigsContainer from "./FilterPigsContainer";

class App extends Component {
  
  state={
  pigs: hogs
  }


  // componentDidMount(){
  //   fetch('porkers_data.js')
  //   .then((resp)=>resp.json())
  //   .then((data)=>console.log(data))
  // }

  render() {
 
    return (
      <div className="App">
        <Nav />

        <PigsComponent pigs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;
