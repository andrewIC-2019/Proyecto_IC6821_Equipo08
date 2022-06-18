"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAOUsuariosImpl = void 0;
var SQLConnection_1 = require("./SQLConnection");
var DAOUsuariosImpl = /** @class */ (function () {
    function DAOUsuariosImpl() {
    }
    DAOUsuariosImpl.prototype.create = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOUsuariosImpl.prototype.get = function (key) {
        throw new Error("Method not implemented.");
    };
    DAOUsuariosImpl.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    DAOUsuariosImpl.prototype.update = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOUsuariosImpl.prototype.getUser = function (username, password) {
        return SQLConnection_1.SQLConnection.getInstance().getUser(username, password);
    };
    return DAOUsuariosImpl;
}());
exports.DAOUsuariosImpl = DAOUsuariosImpl;
