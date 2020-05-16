import React from 'react'

const Filter = props => {
    
    return(
        <div>
           <button className="ui button" onClick={props.greasedStatus}>Greased Pigs</button> 
        </div>
    )
}

export default Filter