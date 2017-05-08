var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs')


router.post('/temp/image/*', function (req, res, next) {
    var cacheFolder = './public/upload/temp/';
    var userDirPath = cacheFolder + 'xubaoshi'
    if (!fs.existsSync(cacheFolder)) {
        fs.mkdirSync(userDirPath);
    }
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = userDirPath;
    form.keepExtensions = true;
    form.maxFieldSize = 2 * 1024 * 1024;
    form.type = true
    var displayUrl;
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.json({
                result: false,
                err: err
            })
            return next();
        }
        var extName = '';
        switch (file.upload.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if (extName.length === 0) {
            res.json({
                result: false,
                err: '只支持png和jpg格式图片'
            })
            return next();
        } else {
            var avatarName = '/' + Date.now() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            displayUrl = form.uploadDir + avatarName;
            fs.renameSync(files.upload.path, newPath);
            res.json({
                result: true,
                err: displayUrl
            })
            return next();
        }
    })
})

module.exports = router;