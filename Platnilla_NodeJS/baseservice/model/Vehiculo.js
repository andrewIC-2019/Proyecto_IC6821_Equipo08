"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(placa_, tipoVehiculo_, deshabilitado_) {
        this._placa = placa_;
        this.tipoVehiculo = tipoVehiculo_;
        this.deshabilitado = deshabilitado_;
    }
    Object.defineProperty(Vehiculo.prototype, "placa", {
        /**
         * Getter placa
         * @return {string}
         */
        get: function () {
            return this._placa;
        },
        /**
         * Setter placa
         * @param {string} value
         */
        set: function (value) {
            this._placa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "tipoVehiculo", {
        /**
         * Getter tipoVehiculo
         * @return {TVehiculo}
         */
        get: function () {
            return this._tipoVehiculo;
        },
        /**
         * Setter tipoVehiculo
         * @param {TVehiculo} value
         */
        set: function (value) {
            this._tipoVehiculo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "deshabilitado", {
        /**
         * Getter deshabilitado
         * @return {boolean}
         */
        get: function () {
            return this._deshabilitado;
        },
        /**
         * Setter deshabilitado
         * @param {boolean} value
         */
        set: function (value) {
            this._deshabilitado = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.deshabilitar = function () {
        this.deshabilitado = false;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
