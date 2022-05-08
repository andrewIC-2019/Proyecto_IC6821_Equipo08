"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var express = require("express");
var common_1 = require("../common");
var model_1 = require("../model");
//a traves de un controller, y que ya cuenta con un logger
var app = express();
exports.test = app;
var log = new common_1.Logger();
//puedo crear un logger, que contiene la logica
//cuando llamo al metodo, llamo al controller mediante
//promises (asincrona)
//el controller (ex. articles controller...)
app.get("/", function (req, res, next) {
    var v = new model_1.Vehiculo("dbo_666", model_1.TVehiculo.OFICIAL, false);
    console.log(v.placa);
    //v.placa = "otra"
    v.placa;
    console.log(v.placa);
    res.send(v);
});
