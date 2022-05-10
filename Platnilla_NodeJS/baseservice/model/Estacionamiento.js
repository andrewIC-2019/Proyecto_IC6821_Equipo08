"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacionamiento = void 0;
var Estacionamiento = /** @class */ (function () {
    function Estacionamiento() {
    }
    Object.defineProperty(Estacionamiento.prototype, "$deshabilitado", {
        /**
         * Getter $deshabilitado
         * @return {boolean}
         */
        get: function () {
            return this.deshabilitado;
        },
        /**
         * Setter $deshabilitado
         * @param {boolean} value
         */
        set: function (value) {
            this.deshabilitado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estacionamiento.prototype, "$ubicacion", {
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
    Object.defineProperty(Estacionamiento.prototype, "$nombre", {
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
    Object.defineProperty(Estacionamiento.prototype, "$telefono", {
        /**
         * Getter $telefono
         * @return {string}
         */
        get: function () {
            return this.telefono;
        },
        /**
         * Setter $telefono
         * @param {string} value
         */
        set: function (value) {
            this.telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estacionamiento.prototype, "$formaAcceso", {
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
    Object.defineProperty(Estacionamiento.prototype, "$descripcion", {
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
    Object.defineProperty(Estacionamiento.prototype, "$cantEspacios", {
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
    Object.defineProperty(Estacionamiento.prototype, "$cantEspaciosEspeciales", {
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
    Object.defineProperty(Estacionamiento.prototype, "$cantEspaciosJefaturas", {
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
    Object.defineProperty(Estacionamiento.prototype, "$cantEspaciosVisitantes", {
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
    Object.defineProperty(Estacionamiento.prototype, "$cantEspaciosOficiales", {
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
    return Estacionamiento;
}());
exports.Estacionamiento = Estacionamiento;
