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
    DAOUsuariosImpl.prototype.login = function (username, password) {
        return SQLConnection_1.SQLConnection.getInstance().login(username, password);
    };
    DAOUsuariosImpl.prototype.registrarVehiculo = function (usuarioId, placa, tipoVehiculo) {
        return SQLConnection_1.SQLConnection.getInstance().registrarVehiculo(usuarioId, placa, tipoVehiculo);
    };
    DAOUsuariosImpl.prototype.ubicaciones = function (provincia, canton, distrito, direccion) {
        return SQLConnection_1.SQLConnection.getInstance().ubicaciones(provincia, canton, distrito, direccion);
    };
    DAOUsuariosImpl.prototype.registrarFuncionario = function (tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password) {
        return SQLConnection_1.SQLConnection.getInstance().registrarFuncionario(tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password);
    };
    return DAOUsuariosImpl;
}());
exports.DAOUsuariosImpl = DAOUsuariosImpl;
