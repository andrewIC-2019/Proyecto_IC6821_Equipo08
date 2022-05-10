"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horario = void 0;
var Horario = /** @class */ (function () {
    function Horario() {
    }
    Object.defineProperty(Horario.prototype, "$diaSemana", {
        /**
         * Getter $diaSemana
         * @return {TDias}
         */
        get: function () {
            return this.diaSemana;
        },
        /**
         * Setter $diaSemana
         * @param {TDias} value
         */
        set: function (value) {
            this.diaSemana = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Horario.prototype, "$horaIniciol", {
        /**
         * Getter $horaIniciol
         * @return {Date}
         */
        get: function () {
            return this.horaIniciol;
        },
        /**
         * Setter $horaIniciol
         * @param {Date} value
         */
        set: function (value) {
            this.horaIniciol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Horario.prototype, "$horaFinal", {
        /**
         * Getter $horaFinal
         * @return {Date}
         */
        get: function () {
            return this.horaFinal;
        },
        /**
         * Setter $horaFinal
         * @param {Date} value
         */
        set: function (value) {
            this.horaFinal = value;
        },
        enumerable: false,
        configurable: true
    });
    return Horario;
}());
exports.Horario = Horario;
