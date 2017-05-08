var express = require('express');
var Nohm = require('nohm').Nohm;
var router = express.Router();

router.post('/', function (req, res, err) {
    var data = {
        name: req.param('name'),
        password: req.param('password'),
        photo: req.param('photo')
    }
    var user = Nohm.factory('User');
    user.store(data, function (err) {
        if (err === 'invalid') {
            next(user.errors);
        } else if (err) {
            next(err);
        } else {
            res.json({
                reysult: 'success',
                data: user.allProperties()
            });
            return next();
        }
    })
})

module.exports = router;