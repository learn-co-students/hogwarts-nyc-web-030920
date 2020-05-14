import React from "react"
import HogCard from "./HogCard"

export default class HogsContainer extends React.Component{

    render(){
        return(
        <div>
            {this.props.hogs.map((hog, index) =>{
                return <HogCard {...hog} key={index}/>
            })}
        </div>
        )
    }
}