"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesrouter = void 0;
var express = require("express");
var common_1 = require("../common");
var controllers_1 = require("../controllers");
//a traves de un controller, y que ya cuenta con un logger
var app = express();
exports.articlesrouter = app;
var log = new common_1.Logger();
//puedo crear un logger, que contiene la logica
//cuando llamo al metodo, llamo al controller mediante
//promises (asincrona)
//el controller (ex. articles controller...)
app.get("/list", function (req, res, next) {
    controllers_1.ArticleController.getInstance().listArticles()
        .then(function (data) {
        if (!data) {
            data = '{"response": false}';
        }
        res.json(JSON.parse(data));
    })
        .catch(function (err) {
        log.error(err);
        return "";
    });
});
