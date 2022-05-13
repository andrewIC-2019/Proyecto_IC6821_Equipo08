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
        return SQLConnection_1.SQLConnection.getInstance().inicio();
    };
    DAOEStacionamientoImpl.prototype.estacionamientoInfo = function (estacionamientoId) {
        return SQLConnection_1.SQLConnection.getInstance().estacionamientoInfo(estacionamientoId);
    };
    DAOEStacionamientoImpl.prototype.eliminarEstacionamiento = function (estacionamientoId) {
        return SQLConnection_1.SQLConnection.getInstance().eliminarEstacionamiento(estacionamientoId);
    };
    DAOEStacionamientoImpl.prototype.registrarEstacionamientoTotal = function (nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional) {
        return SQLConnection_1.SQLConnection.getInstance().registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional);
    };
    DAOEStacionamientoImpl.prototype.pintarEditarEstacionamiento = function (estacionamientoId) {
        return SQLConnection_1.SQLConnection.getInstance().pintarEditarEstacionamiento(estacionamientoId);
    };
    DAOEStacionamientoImpl.prototype.guardarEditarEstacionamiento = function (estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB) {
        return SQLConnection_1.SQLConnection.getInstance().guardarEditarEstacionamiento(estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB);
    };
    DAOEStacionamientoImpl.prototype.estacionamientosTipoSubcontratados = function (subcontratados) {
        return SQLConnection_1.SQLConnection.getInstance().estacionamientosTipoSubcontratados(subcontratados);
    };
    return DAOEStacionamientoImpl;
}());
exports.DAOEStacionamientoImpl = DAOEStacionamientoImpl;
