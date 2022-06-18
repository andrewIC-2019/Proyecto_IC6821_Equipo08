"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTOReservacion = void 0;
var DTOReservacion = /** @class */ (function () {
    function DTOReservacion() {
    }
    Object.defineProperty(DTOReservacion.prototype, "$numero", {
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
    Object.defineProperty(DTOReservacion.prototype, "$usuario", {
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
    Object.defineProperty(DTOReservacion.prototype, "$estacionamieno", {
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
    Object.defineProperty(DTOReservacion.prototype, "$espacio", {
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
    Object.defineProperty(DTOReservacion.prototype, "$hora", {
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
    return DTOReservacion;
}());
exports.DTOReservacion = DTOReservacion;
