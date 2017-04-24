var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/*', function (req, res, next) {
  const path = req.path;
  
  const url = './public/' + path + '.md';
  fs.readFile(url, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      res.json('read file failed!');
      return;
    }
    res.json(data);
  })
});

module.exports = router;
