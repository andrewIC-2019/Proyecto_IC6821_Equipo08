"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherouter = void 0;
var express = require("express");
var app = express();
exports.weatherouter = app;
//esto se esta resolviendo in-memory
var climas = ["Soleado", "Nublado", "Lluvioso", "Ventoso", "Nublado", "Temporal"];
app.get("/conocer", function (req, res, next) {
    res.json({ message: climas[Math.trunc(Math.random() * climas.length)] });
});
app.post("/conocerPara", function (req, res, next) {
    res.json({ message: req.body.cuando + " " + climas[Math.trunc(Math.random() * climas.length)] });
});
