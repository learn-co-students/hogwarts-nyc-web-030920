import React from 'react'
import { render } from 'react-dom'
import FilterPigsContainer from './FilterPigsContainer'


class PigsContainer extends React.Component{
 
    state={
         isToggle:true   
    }    

     handleClick=()=>{
    
      this.setState({isToggle:!this.state.isToggle})
    
    }
render(){
           const{name,specialty,greased,weight}= this.props.pig
          
           
    return(
        
      
        
        <div style={{display:this.state.isToggle?'block':'none'}} onClick={this.handleClick} >
            <h3 className="ui eight wide column">{name}</h3>
            <img  className="ui eight wide column" src={this.props.getImages(name)}alt='pig'/>
            <div >
            <p className="ui eight wide column">{specialty}</p>
            <p className="ui eight wide column">{greased}</p>
            <p className="ui eight wide column">{weight}</p>
            <p className="ui eight wide column">{this.props.pig['highest medal achieved']}</p>
            </div> 
        </div>

        
    )
}
}




export default PigsContainer