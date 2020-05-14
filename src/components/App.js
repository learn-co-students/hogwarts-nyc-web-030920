import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {
	state = {
		hogs,
		greased: false,
	};

	handleCheck = () => {
		const copy = [];
		const greasedMode = !this.state.greased;
		hogs.forEach((hog) => {
			if (greasedMode) {
				if (hog.greased) {
					copy.push(hog);
				}
			} else {
				copy.push(hog);
			}
		});
		this.setState({ hogs: copy, greased: greasedMode });
	};

	sortByName = () => {
    const copy = [...this.state.hogs]
    copy.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({hogs: copy})
	};

	sortByWeight = () => {
    const copy = [...this.state.hogs]
    copy.sort((a,b) => a.weight < b.weight ? -1 : 1)
    this.setState({hogs:copy})
	};

	render() {
		console.log(hogs);
		return (
			<div className="App">
				<Nav
					sortByWeight={this.sortByWeight}
					sortByName={this.sortByName}
					greased={this.state.greased}
					handleCheck={this.handleCheck}
				/>
				<HogsContainer hogs={this.state.hogs} />
			</div>
		);
	}
}

export default App;
