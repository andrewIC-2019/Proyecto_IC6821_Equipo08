"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var express = require("express");
var controller_1 = require("../controller");
var router = express.Router();
var app = express();
exports.user = app;
app.post("/login", login);
function login(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var errMsg = "";
    if (!username || username === "") {
        errMsg = "error: username is empty";
    }
    else if (!password || password === "") {
        errMsg = "error: password is empty";
    }
    var result = "";
    console.log(errMsg);
    console.log(errMsg.length);
    console.log(errMsg.length == 0);
    if (!errMsg && (errMsg.length == 0)) {
        result = controller_1.Control.getInstance().$gestorUsuario.login(username, password);
    }
    var respStruct = {
        errMsg: errMsg,
        json: result
    };
    console.log(result);
    console.log(username, password);
    res.send(respStruct);
}
