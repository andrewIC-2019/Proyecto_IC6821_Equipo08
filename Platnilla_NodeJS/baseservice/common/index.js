"use strict";
//index para los imports de los objs en common, para que queden organizados,
// y no archivo por archivo
// (se recomienda)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = exports.Logger = void 0;
//queda como publico lo que hay en el folder
var logger_1 = require("./logger/logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
var article_1 = require("./library/article");
Object.defineProperty(exports, "Article", { enumerable: true, get: function () { return article_1.Article; } });
