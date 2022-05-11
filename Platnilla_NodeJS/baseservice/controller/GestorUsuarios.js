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
    GestorUsuario.prototype.registrarVehiculo = function (usuarioId, placa, tipoVehiculo) {
        return this.daoUsuario.registrarVehiculo(usuarioId, placa, tipoVehiculo);
    };
    GestorUsuario.prototype.ubicaciones = function (provincia, canton, distrito, direccion) {
        return this.daoUsuario.ubicaciones(provincia, canton, distrito, direccion);
    };
    GestorUsuario.prototype.registrarFuncionario = function (tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password) {
        return this.daoUsuario.registrarFuncionario(tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password);
    };
    return GestorUsuario;
}());
exports.GestorUsuario = GestorUsuario;