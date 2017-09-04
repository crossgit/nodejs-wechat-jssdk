 var signature = require('./signature'),
     config = require('./wechat.config');
 module.exports = {
     getConfig: function(req, res, next) {
         var url = req.params.url;
         signature.sign(url, function(result) {
             result.appId = config.appid;
             res.send(200, result);
             return next();
         })

     }
 }