"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorReservacion = void 0;
var GestorReservacion = /** @class */ (function () {
    function GestorReservacion() {
    }
    Object.defineProperty(GestorReservacion.prototype, "$dtoReservacion", {
        /**
         * Getter $dtoReservacion
         * @return {DTOReservacion}
         */
        get: function () {
            return this.dtoReservacion;
        },
        /**
         * Setter $dtoReservacion
         * @param {DTOReservacion} value
         */
        set: function (value) {
            this.dtoReservacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GestorReservacion.prototype, "$daoRservacion", {
        /**
         * Getter $daoRservacion
         * @return {DAOReservacionImpl}
         */
        get: function () {
            return this.daoRservacion;
        },
        /**
         * Setter $daoRservacion
         * @param {DAOReservacionImpl} value
         */
        set: function (value) {
            this.daoRservacion = value;
        },
        enumerable: false,
        configurable: true
    });
    return GestorReservacion;
}());
exports.GestorReservacion = GestorReservacion;
