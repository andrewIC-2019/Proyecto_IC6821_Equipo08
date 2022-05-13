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
    DAOUsuariosImpl.prototype.informeFuncionarios = function () {
        return SQLConnection_1.SQLConnection.getInstance().informeFuncionarios();
    };
    DAOUsuariosImpl.prototype.informeEstacionamientos = function () {
        return SQLConnection_1.SQLConnection.getInstance().informeEstacionamientos();
    };
    DAOUsuariosImpl.prototype.franjasHorarias = function () {
        return SQLConnection_1.SQLConnection.getInstance().franjasHorarias();
    };
    DAOUsuariosImpl.prototype.consultaFuncionario = function (identificacion) {
        return SQLConnection_1.SQLConnection.getInstance().consultaFuncionario(identificacion);
    };
    DAOUsuariosImpl.prototype.pintarEditarUsuario = function (usuarioId) {
        return SQLConnection_1.SQLConnection.getInstance().pintarEditarUsuario(usuarioId);
    };
    DAOUsuariosImpl.prototype.guardarEditarUsuario = function (usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return SQLConnection_1.SQLConnection.getInstance().guardarEditarUsuario(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    DAOUsuariosImpl.prototype.registrarUsuarioTotal = function (correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return SQLConnection_1.SQLConnection.getInstance().registrarUsuarioTotal(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    DAOUsuariosImpl.prototype.eliminarUsuario = function (usuarioId) {
        return SQLConnection_1.SQLConnection.getInstance().eliminarUsuario(usuarioId);
    };
    return DAOUsuariosImpl;
}());
exports.DAOUsuariosImpl = DAOUsuariosImpl;
