var config = require('./config.json')
var redis = require('redis');
console.log(config.redis.password)
var client = redis.createClient(config.redis.port, config.redis.host, {
    db: config.redis.db_name,
    auth_pass: config.redis.password
});

// client.auth(config.redis.password, function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('password is right')
// })
client.on('ready', function (err) {
    if (err) return;
    console.log('ready!')
})

module.exports = client;