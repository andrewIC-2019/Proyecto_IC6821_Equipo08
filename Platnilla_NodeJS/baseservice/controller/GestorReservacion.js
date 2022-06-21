"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorReservacion = void 0;
var DAORservacionImpl_1 = require("./DAO/DAORservacionImpl");
var DTOReservacion_1 = require("./DTOReservacion");
var GestorReservacion = /** @class */ (function () {
    function GestorReservacion() {
        this.dtoReservacion = new DTOReservacion_1.DTOReservacion();
        this.daoReservacion = new DAORservacionImpl_1.DAOReservacionImpl();
    }
    Object.defineProperty(GestorReservacion.prototype, "$dtoReservacion", {
        /**
         * Getter $dtoReservacion
         * @return {DTOReservacion}
         */
        get: function () {
            return this.dtoReservacion;
        },
        /**
         * Setter $dtoReservacion
         * @param {DTOReservacion} value
         */
        set: function (value) {
            this.dtoReservacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GestorReservacion.prototype, "$daoRservacion", {
        /**
         * Getter $daoRservacion
         * @return {DAOReservacionImpl}
         */
        get: function () {
            return this.daoReservacion;
        },
        /**
         * Setter $daoRservacion
         * @param {DAOReservacionImpl} value
         */
        set: function (value) {
            this.daoReservacion = value;
        },
        enumerable: false,
        configurable: true
    });
    GestorReservacion.prototype.verificacionFranjas = function (usuario, entrada, salida) {
        return this.daoReservacion.verificacionFranjas(usuario, entrada, salida);
    };
    GestorReservacion.prototype.verificacionDiaLaboral = function (jefe, dia) {
        return this.daoReservacion.verificacionDiaLaboral(jefe, dia);
    };
    GestorReservacion.prototype.getDisponiblesTipo = function (tipo) {
        return this.daoReservacion.getDisponiblesTipo(tipo);
    };
    GestorReservacion.prototype.actualizarSalidaReservaciones = function (horaPivot) {
        return this.daoReservacion.actualizarSalidaReservaciones(horaPivot);
    };
    GestorReservacion.prototype.reservarFuncionario = function (usuarioId, estacionamientoId, tipoEspacioId, entrada, salida) {
        return this.daoReservacion.reservarFuncionario(usuarioId, estacionamientoId, tipoEspacioId, entrada, salida);
    };
    GestorReservacion.prototype.reservarJefatura = function (usuarioId, estacionamientoId, tipoEspacioId, dia) {
        return this.daoReservacion.reservarJefatura(usuarioId, estacionamientoId, tipoEspacioId, dia);
    };
    return GestorReservacion;
}());
exports.GestorReservacion = GestorReservacion;
