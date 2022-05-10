"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservacion = void 0;
var Reservacion = /** @class */ (function () {
    function Reservacion() {
    }
    Object.defineProperty(Reservacion.prototype, "$numero", {
        /**
         * Getter $numero
         * @return {bigint}
         */
        get: function () {
            return this.numero;
        },
        /**
         * Setter $numero
         * @param {bigint} value
         */
        set: function (value) {
            this.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$usuario", {
        /**
         * Getter $usuario
         * @return {Usuario}
         */
        get: function () {
            return this.usuario;
        },
        /**
         * Setter $usuario
         * @param {Usuario} value
         */
        set: function (value) {
            this.usuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$estacionamieno", {
        /**
         * Getter $estacionamieno
         * @return {Estacionamiento}
         */
        get: function () {
            return this.estacionamieno;
        },
        /**
         * Setter $estacionamieno
         * @param {Estacionamiento} value
         */
        set: function (value) {
            this.estacionamieno = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$espacio", {
        /**
         * Getter $espacio
         * @return {EspacioEstacionmiento}
         */
        get: function () {
            return this.espacio;
        },
        /**
         * Setter $espacio
         * @param {EspacioEstacionmiento} value
         */
        set: function (value) {
            this.espacio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$hora", {
        /**
         * Getter $hora
         * @return {Horario}
         */
        get: function () {
            return this.hora;
        },
        /**
         * Setter $hora
         * @param {Horario} value
         */
        set: function (value) {
            this.hora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$timestamp", {
        /**
         * Getter $timestamp
         * @return {Date}
         */
        get: function () {
            return this.timestamp;
        },
        /**
         * Setter $timestamp
         * @param {Date} value
         */
        set: function (value) {
            this.timestamp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reservacion.prototype, "$recurrente", {
        /**
         * Getter $recurrente
         * @return {boolean}
         */
        get: function () {
            return this.recurrente;
        },
        /**
         * Setter $recurrente
         * @param {boolean} value
         */
        set: function (value) {
            this.recurrente = value;
        },
        enumerable: false,
        configurable: true
    });
    return Reservacion;
}());
exports.Reservacion = Reservacion;
