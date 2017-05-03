var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs')
var path = require('path')

router.post('/temp/image/*', function (req, res, next) {
    var userDirPath = path.resolve(__dirname, '../public/upload/temp')
    if (!fs.existsSync(userDirPath)) {
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
            return;
        }
        var extName = '';
        switch (files.file.type) {
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
            return;
        } else {
            var avatarName = '/' + Date.now() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            displayUrl = form.uploadDir + avatarName;
            fs.renameSync(files.file.path, newPath);
            res.json({
                result: true,
                displayUrl: '/upload/temp' + avatarName
            })
        }
    })
})

module.exports = router;