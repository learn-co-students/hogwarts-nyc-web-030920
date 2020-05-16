import React, { Component } from "react";

export default class Hog extends Component {
    state = {
        click: false
    }

    toggleTile = () => {
        console.log('show more info')
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        let hogNameforURL = this.props.hog.name.replace(/ /g, "_").toLowerCase()
        let pigImage = require(`../hog-imgs/${hogNameforURL}.jpg`)
        const hogInfo = (
            <div>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.weight}</p>
                <p>{this.props.hog['highest medal achieved']}</p>
            </div >
        )

        return (
            <div className='pigTile' onClick={this.toggleTile}>
                <p><img src={pigImage} alt={this.props.hog.name} /></p>
                <p>{this.props.hog.name}</p>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.greased? 'Gross': 'Clean'}</p>
                {this.state.click ? hogInfo : null}
                {/* ON CLICK SHOW MORE OF THIS INFORMATION */}
            </div>
        )
    }

}
// Biggest gap for me is understanding how event handlers appends info
// to the virtual DOM. 

// Thinking that maybe my click state doesn't need to live in parent