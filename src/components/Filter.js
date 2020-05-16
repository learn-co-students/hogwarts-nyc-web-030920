import React from 'react'

const Filter = props => {
    
    return(
        <div>
           <button className="ui button" onClick={props.greasedStatus}>
               {props.isGreased ? 'See All Pigs' : 'See Greasy Pigs'}
            </button>
            <select className="ui dropdown" onChange={props.sortedStatus}>
                <option value=''>Sort Pigs</option>
                <option value='name'>Sorty By Name</option>
                <option value='weight'>Sorty By Weight</option>
            </select> 
        </div>
    )
}

export default Filter