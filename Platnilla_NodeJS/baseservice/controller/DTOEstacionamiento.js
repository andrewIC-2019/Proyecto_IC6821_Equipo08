"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTOEstacionamiento = void 0;
var DTOEstacionamiento = /** @class */ (function () {
    function DTOEstacionamiento() {
        this.losEstacionamientos = [];
    }
    Object.defineProperty(DTOEstacionamiento.prototype, "$ubicacion", {
        /**
         * Getter $ubicacion
         * @return {Ubicacion}
         */
        get: function () {
            return this.ubicacion;
        },
        /**
         * Setter $ubicacion
         * @param {Ubicacion} value
         */
        set: function (value) {
            this.ubicacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$nombre", {
        /**
         * Getter $nombre
         * @return {string}
         */
        get: function () {
            return this.nombre;
        },
        /**
         * Setter $nombre
         * @param {string} value
         */
        set: function (value) {
            this.nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$formaAcceso", {
        /**
         * Getter $formaAcceso
         * @return {string}
         */
        get: function () {
            return this.formaAcceso;
        },
        /**
         * Setter $formaAcceso
         * @param {string} value
         */
        set: function (value) {
            this.formaAcceso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$descripcion", {
        /**
         * Getter $descripcion
         * @return {string}
         */
        get: function () {
            return this.descripcion;
        },
        /**
         * Setter $descripcion
         * @param {string} value
         */
        set: function (value) {
            this.descripcion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$cantEspacios", {
        /**
         * Getter $cantEspacios
         * @return {number}
         */
        get: function () {
            return this.cantEspacios;
        },
        /**
         * Setter $cantEspacios
         * @param {number} value
         */
        set: function (value) {
            this.cantEspacios = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$cantEspaciosEspeciales", {
        /**
         * Getter $cantEspaciosEspeciales
         * @return {number}
         */
        get: function () {
            return this.cantEspaciosEspeciales;
        },
        /**
         * Setter $cantEspaciosEspeciales
         * @param {number} value
         */
        set: function (value) {
            this.cantEspaciosEspeciales = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$cantEspaciosJefaturas", {
        /**
         * Getter $cantEspaciosJefaturas
         * @return {number}
         */
        get: function () {
            return this.cantEspaciosJefaturas;
        },
        /**
         * Setter $cantEspaciosJefaturas
         * @param {number} value
         */
        set: function (value) {
            this.cantEspaciosJefaturas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$cantEspaciosVisitantes", {
        /**
         * Getter $cantEspaciosVisitantes
         * @return {number}
         */
        get: function () {
            return this.cantEspaciosVisitantes;
        },
        /**
         * Setter $cantEspaciosVisitantes
         * @param {number} value
         */
        set: function (value) {
            this.cantEspaciosVisitantes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$cantEspaciosOficiales", {
        /**
         * Getter $cantEspaciosOficiales
         * @return {number}
         */
        get: function () {
            return this.cantEspaciosOficiales;
        },
        /**
         * Setter $cantEspaciosOficiales
         * @param {number} value
         */
        set: function (value) {
            this.cantEspaciosOficiales = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOEstacionamiento.prototype, "$losEstacionamientos", {
        /**
         * Getter $losEstacionamientos
         * @return {Estacionamiento[]}
         */
        get: function () {
            return this.losEstacionamientos;
        },
        /**
         * Setter $losEstacionamientos
         * @param {Estacionamiento[]} value
         */
        set: function (value) {
            this.losEstacionamientos = value;
        },
        enumerable: false,
        configurable: true
    });
    return DTOEstacionamiento;
}());
exports.DTOEstacionamiento = DTOEstacionamiento;
