import React from 'react'


//render the pictures of hog
export default class HogTile extends React.Component {

    state = {
        isClicked: false,
        isHide: false
    }

    renderImage = (name) => {
        let newName = name.toLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${newName}.jpg`) //how can we dynamically generate the filename?
        return <img src={pigImage} onClick={this.toggleClicked} />
    }

    renderDetails = () => {
        return (
            <div onClick={this.toggleClicked}>
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased: {this.props.greased ? 'yes' : 'no'}</p>
                <p>Weight: {this.props.weight}</p>
                <p>Highest medal achieved: {this.props['highest medal achieved']}</p>
            </div>
        )
    }

    renderShow = () => {
        let img = this.renderImage(this.props.name)
        return (
            <div>
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

    toggleHide = () => {
        this.setState({
            isHide: !this.state.isHide
        })
    }

    render() {
        if (!this.state.isHide) {
            return (
                <div className='ui eight wide column card'>
                    <button onClick={this.toggleHide}>Hide this hog</button>
                    {this.state.isClicked
                    ? this.renderDetails()
                    : this.renderShow()}
                </div>
            )
        } else {
            return (
                <div className='ui eight wide column card'>
                    <button onClick={this.toggleHide}>Reveal this hog</button>
                </div>
            )
        }


    }
}