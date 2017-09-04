var restify = require('restify'),
    wechat = require('./wechat'),
    token = require('./token'),
    port = 3000;

var server = restify.createServer({
    name: 'cross s app',
    version: '1.0.0'
});
// server.use(restify.CORS());
// server.use(restify.CORS({
//     origins: ['https://foo.com', 'http://bar.com', 'http://baz.com:8081'], // defaults to ['*']
//     credentials: true, // defaults to false
//     headers: ['x-foo'] // sets expose-headers
// }));
server.use(restify.CORS({
    headers: ['x-wtf'] // sets expose-headers
}));
server.use(function name(req, res, next) {
    console.log(req.method + '###' + req.url);
    return next();
})
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// static files: /, /index.html, /images...  
server.get(/^\/((.*)(\.)(.+))*$/, restify.serveStatic({ directory: 'public', default: "index.html" }));  

server.get('/', function(req, res, next) {
    res.send('hello');
})

server.post('api/getCfg', wechat.getConfig);
server.get('api/token', token.openNewPage);
server.listen(port, function() {
    console.log('port is ' + port);
});