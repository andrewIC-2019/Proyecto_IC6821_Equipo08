"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAOEStacionamientoImpl = void 0;
var SQLConnection_1 = require("./SQLConnection");
var DAOEStacionamientoImpl = /** @class */ (function () {
    function DAOEStacionamientoImpl() {
    }
    DAOEStacionamientoImpl.prototype.create = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOEStacionamientoImpl.prototype.get = function (key) {
        throw new Error("Method not implemented.");
    };
    DAOEStacionamientoImpl.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    DAOEStacionamientoImpl.prototype.update = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOEStacionamientoImpl.prototype.getAllEStacionamientos = function () {
        console.log("llega bien b");
        return SQLConnection_1.SQLConnection.getInstance().inicio();
    };
    return DAOEStacionamientoImpl;
}());
exports.DAOEStacionamientoImpl = DAOEStacionamientoImpl;
