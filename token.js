 module.exports = {
     openNewPage: function(req, res, next) {
         //  var url = req.params.url;
         //  signature.sign(url, function(result) {
         //      result.appId = config.appid;
         //      res.send(200, result);
         //      return next();
         //  })

         //测试跳转
         res.setHeader('x-wtf', '77777777777777');
         res.send('http://k.crossess.com/');
         return next();
     }
 }