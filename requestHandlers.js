var exec = require("child_process").exec;

function iniciar(response) {
    console.log("Manipulador de petición 'iniciar' fue llamado.");
//'<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    var body = '<html>'+
        '<head>'+
         '</head>'+
        '<body>'+
        '<form action="/subir" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Enviar texto" />'+
        '</form>'+
        '</body>'+
        '</html>';
        //response.writeHead(200, {'Content‐Type': 'text/html'});
        response.write(body);
        response.end();
    /* exec("ls ‐lah", function (error, stdout, stderr) {
       // 
        
    }); */
}

function subir(response) {
    console.log("Manipulador de petición 'subir' fue llamado.");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hola Subir");
    response.end();
}


exports.iniciar = iniciar;
exports.subir = subir;

