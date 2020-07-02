import React from 'react'

class PigTile extends React.Component {

    state = {
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
     
    renderImage = () => {
        const {name} = this.props.pig
        let pigUrl = name.split(' ').join('_').toLowerCase()
        let pigImage = require(`../hog-imgs/${pigUrl}.jpg`) 
        return <img src={pigImage} alt={name} />
    }

    renderDetails = () => {
        const {specialty, greased, weight} = this.props.pig
        return <div>
                <p>Specialty: {specialty}</p>
                <p>Greasy? {greased ? 'Yes' : 'No'}</p>
                <p>Weight: {weight}</p>
                <p>Medals Received: {this.props.pig['highest medal achieved']}</p>
            </div>
    }
    
    render() { 
        const {name} = this.props.pig
        return ( 
            <div className="ui eight wide column">
                <h3>{name}</h3>
                {this.renderImage()}
                {this.state.isClicked ? this.renderDetails() : ''}
                <div className="ui bottom attached button" onClick={this.handleClick}>Pig Details</div>
            </div>
         );
    }
}
 
export default PigTile;