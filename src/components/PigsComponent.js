import React, { Fragment } from "react";
import PigsContainer from './PigsContainer'
import FilterPigsContainer from './FilterPigsContainer'

class PigsComponent extends React.Component {
 getImages=(hogName)=>{
   let formattedName = hogName
   .split(" ")
   .join("_")
   .toLowerCase();

   let pigPics = require(`../hog-imgs/${formattedName}.jpg`)
   return pigPics
 }

 state={
  pigs:[],
  greased:false,
  value: 'All',
  
}




handleChange=(e)=>{
  const{name, value,checked,type}= e.target

  type==='checkbox' ? this.setState({[name]:checked}):
  this.setState({value:value})
}





  render() {
    let allPigs = this.props.pigs
    if(this.state.value === 'nameSort'){
       allPigs = allPigs.sort((a,b)=>a.name.localeCompare(b.name))
    }else if (this.state.value === 'weightSort'){
      allPigs.sort((a, b) => (a.weight - b.weight))
    }else if(this.state.greased){
      allPigs = allPigs.filter((pig)=>{if(pig.greased != false){
        
      return pig
    }
 }
)}
     

    return (
      <div>

  <FilterPigsContainer filterPigs={this.filterPigs}  {...this.state} handleChange={this.handleChange}/><br/>
   
      <div className="ui grid container">

    
       {allPigs.map((pig,index)=>{return <PigsContainer key={index} pig={pig} getImages={this.getImages} />}) }
      
      </div>
      </div>
    );
  }
}

export default PigsComponent;
