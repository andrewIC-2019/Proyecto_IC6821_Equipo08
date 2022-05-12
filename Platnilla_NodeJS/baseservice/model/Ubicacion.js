"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ubicacion = void 0;
var Ubicacion = /** @class */ (function () {
    function Ubicacion() {
    }
    Object.defineProperty(Ubicacion.prototype, "$provincia", {
        /**
         * Getter $provincia
         * @return {string}
         */
        get: function () {
            return this.provincia;
        },
        /**
         * Setter $provincia
         * @param {string} value
         */
        set: function (value) {
            this.provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ubicacion.prototype, "$canton", {
        /**
         * Getter $canton
         * @return {string}
         */
        get: function () {
            return this.canton;
        },
        /**
         * Setter $canton
         * @param {string} value
         */
        set: function (value) {
            this.canton = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ubicacion.prototype, "$distrito", {
        /**
         * Getter $distrito
         * @return {string}
         */
        get: function () {
            return this.distrito;
        },
        /**
         * Setter $distrito
         * @param {string} value
         */
        set: function (value) {
            this.distrito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ubicacion.prototype, "$direccionExacta", {
        /**
         * Getter $direccionExacta
         * @return {string}
         */
        get: function () {
            return this.direccionExacta;
        },
        /**
         * Setter $direccionExacta
         * @param {string} value
         */
        set: function (value) {
            this.direccionExacta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ubicacion.prototype, "$latitud", {
        /**
         * Getter $latitud
         * @return {int}
         */
        get: function () {
            return this.latitud;
        },
        /**
         * Setter $latitud
         * @param {int} value
         */
        set: function (value) {
            this.latitud = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ubicacion.prototype, "$longitud", {
        /**
         * Getter $longitud
         * @return {int}
         */
        get: function () {
            return this.longitud;
        },
        /**
         * Setter $longitud
         * @param {int} value
         */
        set: function (value) {
            this.longitud = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ubicacion;
}());
exports.Ubicacion = Ubicacion;
