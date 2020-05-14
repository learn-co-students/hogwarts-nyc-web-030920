import React from 'react'


//render the pictures of hog
export default class HogTile extends React.Component {

    state = {
        isClicked: false
    }

    renderImage = (name) => {
        let newName = name.toLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${newName}.jpg`) //how can we dynamically generate the filename?
        return <img src={pigImage} />
    }

    renderDetails = () => {
        return (
            <div className='ui eight wide column' onClick={this.toggleClicked}>
                <p>Name: {this.props.name}</p>
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased: {this.props.greased}</p>
                <p>Weight: {this.props.weight}</p>
            </div>
        )
    }

    renderShow = () => {
        let img = this.renderImage(this.props.name)
        return (
            <div className='ui eight wide column' onClick={this.toggleClicked}>
                <h3>{this.props.name}</h3>
                {img}
            </div>
        )
    }

    toggleClicked = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    
    render() {
        return(
            this.state.isClicked
            ? this.renderDetails()
            : this.renderShow()
        )
    }
}