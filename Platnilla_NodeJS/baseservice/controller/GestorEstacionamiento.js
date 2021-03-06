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
        return this.daoEstacionamiento.getAllEStacionamientos();
    };
    GestorEstacionamiento.prototype.estacionamientoInfo = function (estacionamientoId) {
        return this.daoEstacionamiento.estacionamientoInfo(estacionamientoId);
    };
    GestorEstacionamiento.prototype.eliminarEstacionamiento = function (estacionamientoId) {
        return this.daoEstacionamiento.eliminarEstacionamiento(estacionamientoId);
    };
    GestorEstacionamiento.prototype.registrarEstacionamientoTotal = function (nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional) {
        return this.daoEstacionamiento.registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional);
    };
    GestorEstacionamiento.prototype.pintarEditarEstacionamiento = function (estacionamientoId) {
        return this.daoEstacionamiento.pintarEditarEstacionamiento(estacionamientoId);
    };
    GestorEstacionamiento.prototype.guardarEditarEstacionamiento = function (estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB) {
        return this.daoEstacionamiento.guardarEditarEstacionamiento(estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB);
    };
    GestorEstacionamiento.prototype.estacionamientosTipoSubcontratados = function (subcontratados) {
        return this.daoEstacionamiento.estacionamientosTipoSubcontratados(subcontratados);
    };
    GestorEstacionamiento.prototype.crearEspacios = function (estacionamiento, tipo, cantidad) {
        return this.daoEstacionamiento.crearEspacios(estacionamiento, tipo, cantidad);
    };
    GestorEstacionamiento.prototype.calcularEspaciosDisponibles = function (estacionamientoId, tipoEspacioId) {
        return this.daoEstacionamiento.calcularEspaciosDisponibles(estacionamientoId, tipoEspacioId);
    };
    return GestorEstacionamiento;
}());
exports.GestorEstacionamiento = GestorEstacionamiento;
