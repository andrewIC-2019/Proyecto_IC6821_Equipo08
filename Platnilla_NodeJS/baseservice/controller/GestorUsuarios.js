"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorUsuario = void 0;
var DAOUsuariosImpl_1 = require("./DAO/DAOUsuariosImpl");
var DTOUsuario_1 = require("./DTOUsuario");
var GestorUsuario = /** @class */ (function () {
    function GestorUsuario() {
        this.dtoUsuario = new DTOUsuario_1.DTOUsuario();
        this.daoUsuario = new DAOUsuariosImpl_1.DAOUsuariosImpl();
    }
    Object.defineProperty(GestorUsuario.prototype, "$dtoUsuario", {
        /**
         * Getter $dtoUsuario
         * @return {DTOUsuario}
         */
        get: function () {
            return this.dtoUsuario;
        },
        /**
         * Setter $dtoUsuario
         * @param {DTOUsuario} value
         */
        set: function (value) {
            this.dtoUsuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GestorUsuario.prototype, "$daoUsuario", {
        /**
         * Getter $daoUsuario
         * @return {DAOUsuariosImpl}
         */
        get: function () {
            return this.daoUsuario;
        },
        /**
         * Setter $daoUsuario
         * @param {DAOUsuariosImpl} value
         */
        set: function (value) {
            this.daoUsuario = value;
        },
        enumerable: false,
        configurable: true
    });
    //json reponse
    GestorUsuario.prototype.login = function (username, password) {
        return this.daoUsuario.login(username, password);
    };
    GestorUsuario.prototype.informeFuncionarios = function () {
        return this.daoUsuario.informeFuncionarios();
    };
    GestorUsuario.prototype.informeEstacionamientos = function () {
        return this.daoUsuario.informeEstacionamientos();
    };
    GestorUsuario.prototype.franjasHorarias = function () {
        return this.daoUsuario.franjasHorarias();
    };
    GestorUsuario.prototype.consultaFuncionario = function (identificacion) {
        return this.daoUsuario.consultaFuncionario(identificacion);
    };
    GestorUsuario.prototype.pintarEditarUsuario = function (usuarioId) {
        return this.daoUsuario.pintarEditarUsuario(usuarioId);
    };
    GestorUsuario.prototype.guardarEditarUsuario = function (usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return this.daoUsuario.guardarEditarUsuario(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    GestorUsuario.prototype.registrarUsuarioTotal = function (correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return this.daoUsuario.registrarUsuarioTotal(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    GestorUsuario.prototype.eliminarUsuario = function (usuarioId) {
        return this.daoUsuario.eliminarUsuario(usuarioId);
    };
    return GestorUsuario;
}());
exports.GestorUsuario = GestorUsuario;
