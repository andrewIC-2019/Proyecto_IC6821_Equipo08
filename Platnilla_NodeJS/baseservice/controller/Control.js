"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var GestorEstacionamiento_1 = require("./GestorEstacionamiento");
var GestorReservacion_1 = require("./GestorReservacion");
var GestorUsuarios_1 = require("./GestorUsuarios");
var Control = /** @class */ (function () {
    function Control() {
        this.gestorUsuario = new GestorUsuarios_1.GestorUsuario();
        this.gestorEstacionamiento = new GestorEstacionamiento_1.GestorEstacionamiento();
        this.gestorReservacion = new GestorReservacion_1.GestorReservacion();
    }
    Control.getInstance = function () {
        if (!Control.instance) {
            Control.instance = new Control();
        }
        return Control.instance;
    };
    Object.defineProperty(Control.prototype, "$gestorUsuario", {
        /**
         * Getter $gestorUsuario
         * @return {GestorUsuario}
         */
        get: function () {
            return this.gestorUsuario;
        },
        /**
         * Setter $gestorUsuario
         * @param {GestorUsuario} value
         */
        set: function (value) {
            this.gestorUsuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "$gestorEstacionamiento", {
        /**
         * Getter $gestorEstacionamiento
         * @return {GestorEstacionamiento}
         */
        get: function () {
            return this.gestorEstacionamiento;
        },
        /**
         * Setter $gestorEstacionamiento
         * @param {GestorEstacionamiento} value
         */
        set: function (value) {
            this.gestorEstacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "$gestorReservacion", {
        /**
         * Getter $gestorReservacion
         * @return {GestorReservacion}
         */
        get: function () {
            return this.gestorReservacion;
        },
        /**
         * Setter $gestorReservacion
         * @param {GestorReservacion} value
         */
        set: function (value) {
            this.gestorReservacion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Control;
}());
exports.Control = Control;
