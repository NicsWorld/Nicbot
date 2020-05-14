import React, {Component} from 'react';
// import five from 'johnny-five';
// import {Board, Servo} from 'johnny-five';
// const board = new five.Board({
//     port: "Com3"
// });
// const servo = new five.Servo.Continuous(9);
// const {Board, Servo} = require("johnny-five");
// var keypress = require("keypress");
//
// keypress(process.stdin);
// const board = new Board({
//     port: "Com3"
// });
//
// board.on("ready", () => {


class Controls extends Component {
  constructor(props){
    super(props);

    this.leftTurn = this.leftTurn.bind(this);
    this.rightTurn = this.rightTurn.bind(this);
  }

  leftTurn() {
    // servo.cw(1);
    fetch('http://localhost:9000/left')
    .then(response => response.text())
    .then(response => console.log(response));
  }

  rightTurn() {
    // servo.ccw(1);
    fetch('http://localhost:9000/right')
    .then(response => response.text())
    .then(response => console.log(response));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="controls">
            <button className="left-turn" onClick={this.leftTurn}>Left Turn</button>
            <button className="right-turn" onClick={this.rightTurn}>Right Turn</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Controls;
