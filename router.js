function route(handle, pathname, res, postData) {
    console.log("A punto de rutear una peticion para " + pathname);

    var body = '<html>'+
    '<head>'+
     '</head>'+
    '<body>'+
    '<a href="./iniciar">Inicio</a>' +
    '404 No encontrado'
    '</body>'+
    '</html>';

    if (typeof handle[pathname] === 'function') {
        handle[pathname](res, postData);
        } else {
        console.log("No hay manipulador de peticion para " + pathname);
        //response.writeHead(404, {"Content‐Type": "text/html"});
        //res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write(body);
        res.end();
        }
        

    }

exports.route = route;
    