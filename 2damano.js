var server = require('./server');
var router = require('./router')
var requestHandlers = require("./requestHandlers");


var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;


server.start(router.route, handle);
