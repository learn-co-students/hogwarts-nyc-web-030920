import React from 'react'
import PigsContainer from './PigsContainer'


export default function FilterPigsContainer(props){
 console.log(props.value) 

      return(
         
          <div>
        <input type="checkbox"  name="greased"  checked={props.greased} onChange={props.handleChange}/>
        <label >Greased Pigs</label><br/>

        <p>Greased: {props.greased ? "Yes" : "No"}</p>

        <label >Sort By:</label>
        <select value={props.value} onChange={props.handleChange}>
          <option value="All">All</option>
          <option value="nameSort">Name</option>
          <option value="weightSort">Weight</option>
        </select><br/>
        
        <hr/><br/>
        </div>
      )
  


}
