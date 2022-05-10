"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspacioEstacionmiento = void 0;
var EspacioEstacionmiento = /** @class */ (function () {
    function EspacioEstacionmiento() {
    }
    Object.defineProperty(EspacioEstacionmiento.prototype, "$estacionamiento", {
        /**
         * Getter $estacionamiento
         * @return {Estacionamiento}
         */
        get: function () {
            return this.estacionamiento;
        },
        /**
         * Setter $estacionamiento
         * @param {Estacionamiento} value
         */
        set: function (value) {
            this.estacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EspacioEstacionmiento.prototype, "$numero", {
        /**
         * Getter $numero
         * @return {number}
         */
        get: function () {
            return this.numero;
        },
        /**
         * Setter $numero
         * @param {number} value
         */
        set: function (value) {
            this.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EspacioEstacionmiento.prototype, "$tipo", {
        /**
         * Getter $tipo
         * @return {TEspacio}
         */
        get: function () {
            return this.tipo;
        },
        /**
         * Setter $tipo
         * @param {TEspacio} value
         */
        set: function (value) {
            this.tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EspacioEstacionmiento.prototype, "$desahbilitado", {
        /**
         * Getter $desahbilitado
         * @return {boolean}
         */
        get: function () {
            return this.desahbilitado;
        },
        /**
         * Setter $desahbilitado
         * @param {boolean} value
         */
        set: function (value) {
            this.desahbilitado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EspacioEstacionmiento.prototype, "$descipccion", {
        /**
         * Getter $descipccion
         * @return {string}
         */
        get: function () {
            return this.descipccion;
        },
        /**
         * Setter $descipccion
         * @param {string} value
         */
        set: function (value) {
            this.descipccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return EspacioEstacionmiento;
}());
exports.EspacioEstacionmiento = EspacioEstacionmiento;
