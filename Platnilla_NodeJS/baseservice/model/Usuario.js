"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Object.defineProperty(Usuario.prototype, "$identificacion", {
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
    Object.defineProperty(Usuario.prototype, "$nombre", {
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
    Object.defineProperty(Usuario.prototype, "$apellido1", {
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
    Object.defineProperty(Usuario.prototype, "$apellido2", {
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
    Object.defineProperty(Usuario.prototype, "$telefono", {
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
    Object.defineProperty(Usuario.prototype, "$vehiculos", {
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
    Object.defineProperty(Usuario.prototype, "$correo", {
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
    Object.defineProperty(Usuario.prototype, "$deshabilidato", {
        /**
         * Getter $deshabilidato
         * @return {boolean}
         */
        get: function () {
            return this.deshabilidato;
        },
        /**
         * Setter $deshabilidato
         * @param {boolean} value
         */
        set: function (value) {
            this.deshabilidato = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "$password", {
        /**
         * Getter $password
         * @return {string}
         */
        get: function () {
            return this.password;
        },
        /**
         * Setter $password
         * @param {string} value
         */
        set: function (value) {
            this.password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "$esAdministrador", {
        /**
         * Getter $esAdministrador
         * @return {boolean}
         */
        get: function () {
            return this.esAdministrador;
        },
        /**
         * Setter $esAdministrador
         * @param {boolean} value
         */
        set: function (value) {
            this.esAdministrador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "$permisos", {
        /**
         * Getter $permisos
         * @return {TPermisosUsuario[]}
         */
        get: function () {
            return this.permisos;
        },
        /**
         * Setter $permisos
         * @param {TPermisosUsuario[]} value
         */
        set: function (value) {
            this.permisos = value;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
exports.Usuario = Usuario;
