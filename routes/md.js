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
      return next();
    }
    res.json(data);
    return next();
  })
});

router.post('/*', function (req, res, next) {
  const path = req.path;
  const url = './public/' + path + '.md';
  fs.writeFile(url, req.body.content, function (err) {
    if (err) {
      res.json({
        result: false
      })
     return next();
    }
    res.json({
      result: true
    })
    return next();
  })
})

module.exports = router;