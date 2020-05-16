import React, { Component } from "react";
import Hog from './Hog'

export default class HogTiles extends Component {
    render() {
        return (
            <div className='ui grid container'>
                {this.props.hogsData.map(hog => { // REMEMEBER THAT MAP DOES NOT IMPLICITLY RETURN
                    return <Hog
                        key={hog.name}
                        hog={hog}
                    />
                })}
            </div>
        )
    }

}