"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorEstacionamiento = void 0;
var DAOEstacionamientoImpl_1 = require("./DAO/DAOEstacionamientoImpl");
var DTOEstacionamiento_1 = require("./DTOEstacionamiento");
var GestorEstacionamiento = /** @class */ (function () {
    function GestorEstacionamiento() {
        this.dtoEstacionamiento = new DTOEstacionamiento_1.DTOEstacionamiento();
        this.daoEstacionamiento = new DAOEstacionamientoImpl_1.DAOEStacionamientoImpl();
    }
    Object.defineProperty(GestorEstacionamiento.prototype, "$dtoEstacionamiento", {
        /**
         * Getter $dtoEstacionamiento
         * @return {DTOEstacionamiento}
         */
        get: function () {
            return this.dtoEstacionamiento;
        },
        /**
         * Setter $dtoEstacionamiento
         * @param {DTOEstacionamiento} value
         */
        set: function (value) {
            this.dtoEstacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GestorEstacionamiento.prototype, "$daoEstacionamiento", {
        /**
         * Getter $daoEstacionamiento
         * @return {DAOEStacionamientoImpl}
         */
        get: function () {
            return this.daoEstacionamiento;
        },
        /**
         * Setter $daoEstacionamiento
         * @param {DAOEStacionamientoImpl} value
         */
        set: function (value) {
            this.daoEstacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    GestorEstacionamiento.prototype.inicio = function () {
        console.log("llega bien A");
        return this.daoEstacionamiento.getAllEStacionamientos();
    };
    GestorEstacionamiento.prototype.registrarEstacionamiento = function (tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion) {
        console.log("llega bien A");
        return this.daoEstacionamiento.registrarEstacionamiento(tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion);
    };
    GestorEstacionamiento.prototype.estacionamientoInfo = function (estacionamientoId) {
        return this.daoEstacionamiento.estacionamientoInfo(estacionamientoId);
    };
    return GestorEstacionamiento;
}());
exports.GestorEstacionamiento = GestorEstacionamiento;
