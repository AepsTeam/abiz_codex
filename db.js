var config = require('./config.json')
var Nohm = require('nohm').Nohm
var redis = require('redis');

var UserModel = require('./models/user')


var connentRedisDataBase = function (app) {
    var redisClient = redis.createClient(config.redis.port, config.redis.host, {
        db: config.redis.db_name,
        auth_pass: config.redis.password
    });

    Nohm.setPrefix('codex')
    Nohm.setClient(redisClient)

    app.use(Nohm.connect([{
        model: UserModel,
        blacklist: ['salt']
    }]))
}


module.exports = connentRedisDataBase;