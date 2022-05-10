"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTOUsuario = void 0;
var DTOUsuario = /** @class */ (function () {
    function DTOUsuario() {
    }
    Object.defineProperty(DTOUsuario.prototype, "$identificacion", {
        /**
         * Getter $identificacion
         * @return {string}
         */
        get: function () {
            return this.identificacion;
        },
        /**
         * Setter $identificacion
         * @param {string} value
         */
        set: function (value) {
            this.identificacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$nombre", {
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
    Object.defineProperty(DTOUsuario.prototype, "$apellido1", {
        /**
         * Getter $apellido1
         * @return {string}
         */
        get: function () {
            return this.apellido1;
        },
        /**
         * Setter $apellido1
         * @param {string} value
         */
        set: function (value) {
            this.apellido1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$apellido2", {
        /**
         * Getter $apellido2
         * @return {string}
         */
        get: function () {
            return this.apellido2;
        },
        /**
         * Setter $apellido2
         * @param {string} value
         */
        set: function (value) {
            this.apellido2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$telefono", {
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
    Object.defineProperty(DTOUsuario.prototype, "$vehiculos", {
        /**
         * Getter $vehiculos
         * @return {Vehiculo[]}
         */
        get: function () {
            return this.vehiculos;
        },
        /**
         * Setter $vehiculos
         * @param {Vehiculo[]} value
         */
        set: function (value) {
            this.vehiculos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$correo", {
        /**
         * Getter $correo
         * @return {string}
         */
        get: function () {
            return this.correo;
        },
        /**
         * Setter $correo
         * @param {string} value
         */
        set: function (value) {
            this.correo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$correoInstitucional", {
        /**
         * Getter $correoInstitucional
         * @return {string}
         */
        get: function () {
            return this.correoInstitucional;
        },
        /**
         * Setter $correoInstitucional
         * @param {string} value
         */
        set: function (value) {
            this.correoInstitucional = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$division", {
        /**
         * Getter $division
         * @return {Division}
         */
        get: function () {
            return this.division;
        },
        /**
         * Setter $division
         * @param {Division} value
         */
        set: function (value) {
            this.division = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DTOUsuario.prototype, "$losUsuarios", {
        /**
         * Getter $losUsuarios
         * @return {Usuario[]}
         */
        get: function () {
            return this.losUsuarios;
        },
        /**
         * Setter $losUsuarios
         * @param {Usuario[]} value
         */
        set: function (value) {
            this.losUsuarios = value;
        },
        enumerable: false,
        configurable: true
    });
    return DTOUsuario;
}());
exports.DTOUsuario = DTOUsuario;
