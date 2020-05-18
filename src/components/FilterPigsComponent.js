import React from 'react'
import FilterPigsContainer from './FilterPigsContainer'
import PigsContainer from './PigsContainer'


export default class FilterPigsComponent extends React.Component{


filterPigs=(e)=>{
    const {type, name, value, checked} = e.target
    if (type==='checkbox'){
        this.setState({[name]:checked})
        this.props.pigs.filter((pig)=>{if(pig.greased != false){
            // <PigsContainer pig={pig} />
            console.log(pig)
          
        }
     }
)}
    
}

render(){


    return(
      <div>
          <FilterPigsContainer filterPigs={this.filterPigs} {...this.state}/>


      </div>
    )
}



}