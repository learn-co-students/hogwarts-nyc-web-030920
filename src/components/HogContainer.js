import React, { Component } from 'react';
import HogCard from "./HogCard";
import "../App.css";

class HogContainer extends Component {
    render() {
        console.log('props :>> ', this.props);
        return (
            <div>
               {this.props.hogs.map((hog, index) => <HogCard key={index} hog={hog}/>)}
            </div>
        );
    }
}

export default HogContainer;
