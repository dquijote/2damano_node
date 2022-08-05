const http = require('http');
const url = require('url')

const hostname = '127.0.0.1';
const port = 8888;

function start(route){
    const server = http.createServer((req, res) => {
      var pathname = url.parse(req.url).pathname;
      console.log('Request for ' +   pathname  + ' recive')

      route(pathname);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Otra prueba de ');
      res.end('Hello World');
  
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Servidor Iniciado');
});
}





exports.start = start;
