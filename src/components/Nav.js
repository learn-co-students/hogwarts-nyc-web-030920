import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <hr/>
      <input onChange={props.handleCheck} id="greased" type="checkbox" checked={props.greased}/> 
      <label htmlFor="greased"> Greased?</label>
      <button onClick={props.sortByName}>Sort by Name</button>
      <button onClick={props.sortByWeight}>Sort by Weight</button>
    </div>
  );
};

export default Nav;
