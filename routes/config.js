var index = require('./index');
var md = require('./md');
var upload = require('./upload');
var user = require('./user');

module.exports = function routesConfig(app) {
    app.use('/', index);

    app.use('/home', index);
    app.use('/user_register', index);
    app.use('/user_update', index);
    app.use('/login', index);
    
    app.use('/codex/*', index);
    app.use('/edit/*', index);
    app.use('/md', md);
    app.use('/upload', upload);
    app.use('/user', user);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        next(err);
    });
}