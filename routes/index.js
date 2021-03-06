var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    res.render('index', {
      htmlWebpackPlugin: {
        options: {
          mode: 'prod'
        }
      }
    });
  } else {
    res.render('index', {
      htmlWebpackPlugin: {
        options: {
          mode: 'dev'
        }
      }
    });
  }
});

module.exports = router;