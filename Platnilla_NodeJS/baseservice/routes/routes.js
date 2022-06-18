"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var common_1 = require("../common");
var weather_1 = require("./weather");
var articlesrouter_1 = require("./articlesrouter");
var user_1 = require("./user");
var estacionamiento_1 = require("./estacionamiento");
var reservacion_1 = require("./reservacion");
/*
LUEGO DE LA APLICACION, CAE AL ENRUTADOR, ME LLEVA A LOS
CONTROLADORES
*/
//estructura basica a seguir
//este monta todos los routes
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.logger = new common_1.Logger();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use('/weather', weather_1.weatherouter);
        this.express.use('/articles', articlesrouter_1.articlesrouter);
        this.express.use('/user', user_1.user);
        this.express.use('/estacionamiento', estacionamiento_1.estacionamiento);
        this.express.use('/reservaciones', reservacion_1.reservaciones);
        this.logger.info("Routes loaded");
    };
    return Routes;
}());
exports.default = new Routes().express;
