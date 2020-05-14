var express = require('express');
var router = express.Router();
const {Board, Servo} = require("johnny-five");

const board = new Board({
    port: "Com3"
});
/* Right. */
router.get('/', function(req, res, next) {
// const board = new Board({
//     port: "Com3"
// });
res.send('right');
  // board.on("ready", () => {
  //   console.log('-------------board is ready-------------');
  // const servo = new Servo.Continuous(9);
  // servo.ccw(1);
  // });
  //
  // board.on('exit', () => {
  //   console.log('exiting');
  // });
});
module.exports = router;
