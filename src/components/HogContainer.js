import React from 'react'
import HogTile from './HogTile'

export default class HogContainer extends React.Component {
    render() {
        return(
            <div className="ui grid container">
                {this.props.allHogs.map((hog, index) => <HogTile {...hog} key={index}/>)}
            </div>
        )
    }
}