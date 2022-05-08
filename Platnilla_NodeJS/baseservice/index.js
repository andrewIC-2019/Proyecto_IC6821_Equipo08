"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var http = require("http");
var common_1 = require("./common");
/*
INICIO DEL SERVICIO
*/
//abre un servidor rest en el puerto 5000
//lo arranca
var port = 5000;
var logger = new common_1.Logger();
app_1.default.set('port', port);
var server = http.createServer(app_1.default);
server.listen(port);
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
//exporta lo que esta en la aplicacion (app)
module.exports = app_1.default;
