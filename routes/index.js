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
    return next();
  } else {
    res.render('index', {
      htmlWebpackPlugin: {
        options: {
          mode: 'dev'
        }
      }
    });
    return next();
  }
});

module.exports = router;