const express = require('express');
const bodyParser = require('body-parser');
// const {Board, Servo} = require("johnny-five");
const five = require('johnny-five');
const app = express();
// const board = new five.Board();
const {Board, Servo} = require("johnny-five");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const board = new Board();

  // var servo = new Servo({
  //   pin: 10,
  //   type: "continuous"
  // });
// const {Board, Servo} = require("johnny-five");
// const board = new Board();
//
// board.on("ready", () => {
//   const servo = new Servo.Continuous(9);
//   // var servo = new five.Servo({
//   //   pin: 10,
//   //   type: "continuous"
//   // });
//       servo.ccw(100);
// });

board.on('ready', function () {
  console.log('board is ready freddy');
  const servo = new Servo.Continuous(9);
  console.log('servo ready');
  app.listen("9000", () => {
    app.get('/left', function(req, res){
      servo.ccw(1);
      res.send('left');
    });

    app.get('/right', function(req, res){
      servo.cw(1);
      res.send('right');
    });
    console.log("App listening on port 9000");
  });
});



// const board = new Board();
//
// board.on("ready", () => {
//   const servo = new Servo.Continuous(9);
//   // var servo = new five.Servo({
//   //   pin: 10,
//   //   type: "continuous"
//   // });
//       servo.ccw(100);
// });
