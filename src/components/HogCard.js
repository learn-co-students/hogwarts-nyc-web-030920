import React from "react";

export default class HogCard extends React.Component {
	state = {
		isFront: true,
		hidden: false,
	};

	flipCard = () => {
		this.setState({ isFront: !this.state.isFront });
	};

	hideHog = () => {
		this.setState({ hidden: !this.state.hidden });
	};
	getImg = () => {
        let pigName = this.props.name
        let split = pigName.split(" ")
        let imgName = split.join("_").toLowerCase()
		let pigImage = require(`../hog-imgs/${imgName}.jpg`); //how can we dynamically generate the filename?
		return <img alt={this.props.name} src={pigImage} />;
	};
	render() {
		// console.log(this.state)
		const className = this.state.hidden ? "hidden" : "card";
		return (
			<div className={className} onClick={this.flipCard}>
				{this.state.isFront ? (
					<div>
						<div>{this.props.name}</div>
						<div>{this.getImg()}</div>
					</div>
				) : (
					<div>
						<div>Specialty: {this.props.specialty}</div>
						<div>Weight: {this.props.weight}</div>
						<div>Greased: {this.props.greased ? "YES" : "NO"}</div>
						<div>
							Highest Medal Achieved:{" "}
							{this.props["highest medal achieved"]}
						</div>
					</div>
				)}
				<br />
				<button onClick={this.hideHog}>Hide Hog</button>
			</div>
		);
	}
}
