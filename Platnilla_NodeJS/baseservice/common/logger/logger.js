"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
//salida de logs -en consola-, personalizada
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.info = function (logText) {
        console.log({ "date": new Date(), "level": "info", "message": logText });
    };
    Logger.prototype.debug = function (logText) {
        console.log({ "date": new Date(), "level": "debug", "message": logText });
    };
    Logger.prototype.error = function (logText) {
        console.log({ "date": new Date(), "level": "error", "message": logText });
    };
    return Logger;
}());
exports.Logger = Logger;
