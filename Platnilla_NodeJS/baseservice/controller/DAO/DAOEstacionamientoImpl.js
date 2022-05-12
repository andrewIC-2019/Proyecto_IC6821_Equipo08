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
    DAOEStacionamientoImpl.prototype.registrarEstacionamiento = function (tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion) {
        console.log("llega bien A");
        return SQLConnection_1.SQLConnection.getInstance().registrarEstacionamiento(tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion);
    };
    DAOEStacionamientoImpl.prototype.estacionamientoInfo = function (estacionamientoId) {
        return SQLConnection_1.SQLConnection.getInstance().estacionamientoInfo(estacionamientoId);
    };
    DAOEStacionamientoImpl.prototype.eliminarEstacionamiento = function (identificacion) {
        return SQLConnection_1.SQLConnection.getInstance().eliminarEstacionamiento(identificacion);
    };
    DAOEStacionamientoImpl.prototype.registrarEstacionamientoTotal = function (nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional) {
        return SQLConnection_1.SQLConnection.getInstance().registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional);
    };
    return DAOEStacionamientoImpl;
}());
exports.DAOEStacionamientoImpl = DAOEStacionamientoImpl;
