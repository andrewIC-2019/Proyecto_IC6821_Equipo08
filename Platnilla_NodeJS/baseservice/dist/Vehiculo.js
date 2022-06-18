"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(placa_, tipoVehiculo_, deshabilitado_) {
        this.placa_ = placa_;
        this.tipoVehiculo_ = tipoVehiculo_;
        this.deshabilitado_ = deshabilitado_;
        this.placa = placa_;
        this.tipoVehiculo = tipoVehiculo_;
        this.deshabilitado = deshabilitado_;
    }
    get placa() {
        return this._placa;
    }
    set placa(value) {
        this._placa = value;
    }
    get tipoVehiculo() {
        return this._tipoVehiculo;
    }
    set tipoVehiculo(value) {
        this._tipoVehiculo = value;
    }
    get deshabilitado() {
        return this._deshabilitado;
    }
    set deshabilitado(value) {
        this._deshabilitado = value;
    }
    deshabilitar() {
        this.deshabilitado = false;
    }
}
exports.Vehiculo = Vehiculo;
//# sourceMappingURL=Vehiculo.js.map