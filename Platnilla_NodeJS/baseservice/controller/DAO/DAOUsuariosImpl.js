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
    DAOUsuariosImpl.prototype.diasSemana = function () {
        return SQLConnection_1.SQLConnection.getInstance().diasSemana();
    };
    DAOUsuariosImpl.prototype.ocupacionXTipo = function (estacionamiento) {
        return SQLConnection_1.SQLConnection.getInstance().ocupacionXTipo(estacionamiento);
    };
    DAOUsuariosImpl.prototype.ocupacionXDepartamento = function (estacionamiento) {
        return SQLConnection_1.SQLConnection.getInstance().ocupacionXDepartamento(estacionamiento);
    };
    DAOUsuariosImpl.prototype.ocupacionTotalXDepartamento = function (departamento) {
        return SQLConnection_1.SQLConnection.getInstance().ocupacionTotalXDepartamento(departamento);
    };
    DAOUsuariosImpl.prototype.verMisReservas = function (usuario, limiteA, limiteB) {
        return SQLConnection_1.SQLConnection.getInstance().verMisReservas(usuario, limiteA, limiteB);
    };
    DAOUsuariosImpl.prototype.verReservasEstacionamiento = function (estacionamiento) {
        return SQLConnection_1.SQLConnection.getInstance().verReservasEstacionamiento(estacionamiento);
    };
    DAOUsuariosImpl.prototype.registrarOficial = function (estacionamientoId, placa, conductor, entrada) {
        return SQLConnection_1.SQLConnection.getInstance().registrarOficial(estacionamientoId, placa, conductor, entrada);
    };
    DAOUsuariosImpl.prototype.salidaOficial = function (estacionamientoId, placa, conductor, salida) {
        return SQLConnection_1.SQLConnection.getInstance().salidaOficial(estacionamientoId, placa, conductor, salida);
    };
    DAOUsuariosImpl.prototype.estacionamientosUsuario = function (objetivo, usuario) {
        return SQLConnection_1.SQLConnection.getInstance().estacionamientosUsuario(objetivo, usuario);
    };
    DAOUsuariosImpl.prototype.registrarUsuarioTotalF2 = function (correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, notificarCorreoAlterno, esAdministrador, esJefatura, esDiscapacitado, esOperador, horarios) {
        return SQLConnection_1.SQLConnection.getInstance().registrarUsuarioTotalF2(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, notificarCorreoAlterno, esAdministrador, esJefatura, esDiscapacitado, esOperador, horarios);
    };
    DAOUsuariosImpl.prototype.guardarEditarUsuarioF2 = function (usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, notificarCorreoAlterno, esAdministrador, esJefatura, esDiscapacitado, esOperador, horarios) {
        return SQLConnection_1.SQLConnection.getInstance().guardarEditarUsuarioF2(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, notificarCorreoAlterno, esAdministrador, esJefatura, esDiscapacitado, esOperador, horarios);
    };
    return DAOUsuariosImpl;
}());
exports.DAOUsuariosImpl = DAOUsuariosImpl;
