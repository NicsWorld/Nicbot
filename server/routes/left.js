var express = require('express');
var router = express.Router();
const {Board, Servo} = require("johnny-five");

// const board = new Board({
//     port: "Com3"
// });
/* left. */
router.get('/', function(req, res, next) {
  res.send('left');
});

module.exports = router;
