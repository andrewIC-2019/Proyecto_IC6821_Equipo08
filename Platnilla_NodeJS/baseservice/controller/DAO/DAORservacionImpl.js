"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAOReservacionImpl = void 0;
var SQLConnection_1 = require("./SQLConnection");
var DAOReservacionImpl = /** @class */ (function () {
    function DAOReservacionImpl() {
    }
    DAOReservacionImpl.prototype.create = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOReservacionImpl.prototype.get = function (key) {
        throw new Error("Method not implemented.");
    };
    DAOReservacionImpl.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    DAOReservacionImpl.prototype.update = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAOReservacionImpl.prototype.verificacionFranjas = function (usuario, entrada, salida) {
        return SQLConnection_1.SQLConnection.getInstance().verificacionFranjas(usuario, entrada, salida);
    };
    DAOReservacionImpl.prototype.verificacionDiaLaboral = function (jefe, dia) {
        return SQLConnection_1.SQLConnection.getInstance().verificacionDiaLaboral(jefe, dia);
    };
    DAOReservacionImpl.prototype.getDisponiblesTipo = function (tipo) {
        return SQLConnection_1.SQLConnection.getInstance().getDisponiblesTipo(tipo);
    };
    DAOReservacionImpl.prototype.actualizarSalidaReservaciones = function (horaPivot) {
        return SQLConnection_1.SQLConnection.getInstance().actualizarSalidaReservaciones(horaPivot);
    };
    DAOReservacionImpl.prototype.reservarFuncionario = function (usuarioId, estacionamientoId, tipoEspacioId, entrada, salida) {
        return SQLConnection_1.SQLConnection.getInstance().reservarFuncionario(usuarioId, estacionamientoId, tipoEspacioId, entrada, salida);
    };
    return DAOReservacionImpl;
}());
exports.DAOReservacionImpl = DAOReservacionImpl;
