import React, { Component } from 'react';
import "../App.css";


class HogCard extends Component {

    state = {
        clicked: false
    }

    // getHogImg = (name) => {
    //     hogImgs.map(hog => hog.split('.')[0] === name)
    // }

    toggleClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }

    renderFull = () => {
        let pigName = this.props.hog.name.split(" ").join("_").toLowerCase();
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return (
        <div className="pigTile">
            <img src={pigImage} alt={this.props.hog.name}/> <br/>
            name: {this.props.hog.name} <br/>
            specialty: {this.props.hog.specialty}  <br/>
            greased: {this.props.hog.greased}  <br/>
            weight: {this.props.hog.weight} <br/>
            {/* highest medal achieved: {this.props} */}
         </div>
        )
    }

    renderShort = () => {
        let pigName = this.props.hog.name.split(" ").join("_").toLowerCase();
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return (
        <div className="pigTile">
            <img src={pigImage} alt={this.props.hog.name} /><br/>
            {this.props.hog.name}
            </div>
        )
    }

    render() {
    //    console.log('props :>> ', this.props);
      return  (
          <div onClick={this.toggleClicked}>
             {this.state.clicked? this.renderFull() : this.renderShort()}
        </div>)
           
    }
}

export default HogCard;
