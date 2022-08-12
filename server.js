const http = require('http');
const url = require('url')

const hostname = '127.0.0.1';
const port = 8888;

function start(route, handle) {
  function onRequest(request, response) {
      var dataPosteada = "";
      var pathname = url.parse(request.url).pathname;
      console.log("Peticion para " + pathname + " recibida.");
      request.setEncoding("utf8");

    request.addListener("data", function(trozoPosteado) {
    });
  dataPosteada += trozoPosteado;
  console.log("Recibido trozo POST '" + trozoPosteado + "'.");
  
  request.addListener("end", function() {
      route(handle, pathname, response, dataPosteada);
  });
  }
  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado");
  }
  


exports.start = start;
