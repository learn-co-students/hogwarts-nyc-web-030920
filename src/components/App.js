import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile"
// import { createSymlinkSync } from "fs-extra";

class App extends Component {

state ={
  hogs: hogs,
  greased: true,
  hidden: false
}
resetDom =()=>{
  console.log('reset')
  this.setState({
    hogs: hogs
  })
}
// WHY DOES THIS NOT WORK?? TYRING TO APPEND OG hogs 
// *** Solution-- the sort method mutates the original Array
// *** This is why this doesn't work. hogs is currently mutated
filterGrease=()=>{
  console.log('filtered by grease')
  const greasedUp = this.state.hogs.filter(hog => hog.greased === true)
  this.setState({
    hogs: greasedUp
  })
}

filterName=()=>{
  console.log('filtered by name')
  let newArray = [{...this.state.hogs}]
const sortedName = this.state.hogs.sort((a,b)=>{
  if(a.name < b.name){
    return -1;
  }
  if(a.name > b.name){
    return 1;
  }

  return 0;
});

this.setState({
  hogs: sortedName
})
}

filterWeight=()=>{
  console.log('filtered by weight')
const sortedWeight = this.state.hogs.sort((a,b)=>{
  if(a.weight < b.weight){
    return -1;
  }
  if(a.weight > b.weight){
    return 1;
  }

  return 0;
});

this.setState({
  hogs: sortedWeight
})
}

hideHogs=()=>{
  this.setState({
    hidden: !this.state.hidden
  })
  
  console.log('hide Hog',this.state)
  if(this.state.hidden){
    this.setState({
      hogs:[]
    })
  }else{
    this.setState({
      hogs: hogs
    })
  }
}

  render() {
    return (
      <div className="App">
        <Nav />
    <button onClick={this.hideHogs}>{this.state.hidden?'Hide Hogs': 'Show Hogs'}</button>
        <button onClick ={this.filterGrease}>Filter by Grease</button>
        <button onClick={this.filterName}>Sort by Name</button>
        <button onClick={this.filterWeight}>Sort by Weight</button>
        <button onClick={this.resetDom}>Reset</button>
        <HogTile hogsData={this.state.hogs} /*toggleTile={this.toggleTile}*/ />
      </div>
    );
  }
}

export default App;
