var express = require('express');
var router = express.Router();

router.get('/php',function (req, res) {
  res.send("Khoa hoc lap trinh PHP");
});

router.get('/ios',function (req, res) {
  res.send("Khoa hoc lap trinh IOS");
});

router.get('/android',function(req, res) {
	res.send("Khoa hoc lap trinh Android");
});

module.exports = router;
