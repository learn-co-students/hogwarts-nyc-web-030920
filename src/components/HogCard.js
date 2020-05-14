import React from "react";

export default class HogCard extends React.Component {
    state = {
        isFront: true,
        hidden: false
    }

    flipCard = () => {
        this.setState({isFront: !this.state.isFront})
    }

    hideHog = () => {
        this.setState({hidden: !this.state.hidden})
    }
	render() {
        // console.log(this.state)
        const className = this.state.hidden ? "hidden" : "card"
		return(
            <div className={className} onClick={this.flipCard}>
                {this.state.isFront
                    ? <div>{this.props.name}</div>
                    : (<div>
                        <div>Specialty: {this.props.specialty}</div>
                        <div>Weight: {this.props.weight}</div>
                        <div>Greased: {this.props.greased ? "YES" : "NO"}</div>
                        <div>Highest Medal Achieved: {this.props['highest medal achieved']}</div>
                    </div>)
                }
                <br/>
                <button onClick={this.hideHog}>Hide Hog</button>
            </div>
        )
	}
}
