"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
var Division = /** @class */ (function () {
    function Division() {
    }
    Object.defineProperty(Division.prototype, "$codigoDivision", {
        /**
         * Getter $codigoDivision
         * @return {string}
         */
        get: function () {
            return this.codigoDivision;
        },
        /**
         * Setter $codigoDivision
         * @param {string} value
         */
        set: function (value) {
            this.codigoDivision = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Division.prototype, "$descripcion", {
        /**
         * Getter $descripcion
         * @return {string}
         */
        get: function () {
            return this.descripcion;
        },
        /**
         * Setter $descripcion
         * @param {string} value
         */
        set: function (value) {
            this.descripcion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Division;
}());
exports.Division = Division;
