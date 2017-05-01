var index = require('./index');
var md = require('./md');

module.exports = function routesConfig(app) {
    app.use('/', index);
    app.use('/home', index);
    app.use('/codex/*', index);
    app.use('/edit/*', index);
    app.use('/md', md);
}