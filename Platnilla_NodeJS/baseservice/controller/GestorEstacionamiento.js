"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorEstacionamiento = void 0;
var GestorEstacionamiento = /** @class */ (function () {
    function GestorEstacionamiento() {
    }
    Object.defineProperty(GestorEstacionamiento.prototype, "$dtoEstacionamiento", {
        /**
         * Getter $dtoEstacionamiento
         * @return {DTOEstacionamiento}
         */
        get: function () {
            return this.dtoEstacionamiento;
        },
        /**
         * Setter $dtoEstacionamiento
         * @param {DTOEstacionamiento} value
         */
        set: function (value) {
            this.dtoEstacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GestorEstacionamiento.prototype, "$daoEstacionamiento", {
        /**
         * Getter $daoEstacionamiento
         * @return {DAOEStacionamientoImpl}
         */
        get: function () {
            return this.daoEstacionamiento;
        },
        /**
         * Setter $daoEstacionamiento
         * @param {DAOEStacionamientoImpl} value
         */
        set: function (value) {
            this.daoEstacionamiento = value;
        },
        enumerable: false,
        configurable: true
    });
    return GestorEstacionamiento;
}());
exports.GestorEstacionamiento = GestorEstacionamiento;
