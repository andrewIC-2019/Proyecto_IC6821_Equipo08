import { TVehiculo } from "./TVehiculo";

export class Vehiculo {

    /**
     * Getter placa
     * @return {string}
     */
	public get placa(): string {
		return this._placa;
	}

    /**
     * Getter tipoVehiculo
     * @return {TVehiculo}
     */
	public get tipoVehiculo(): TVehiculo {
		return this._tipoVehiculo;
	}

    /**
     * Getter deshabilitado
     * @return {boolean}
     */
	public get deshabilitado(): boolean {
		return this._deshabilitado;
	}

    /**
     * Setter placa
     * @param {string} value
     */
	public set placa(value: string) {
		this._placa = value;
	}

    /**
     * Setter tipoVehiculo
     * @param {TVehiculo} value
     */
	public set tipoVehiculo(value: TVehiculo) {
		this._tipoVehiculo = value;
	}

    /**
     * Setter deshabilitado
     * @param {boolean} value
     */
	public set deshabilitado(value: boolean) {
		this._deshabilitado = value;
	}
    private _placa: string;
    private _tipoVehiculo: TVehiculo;
    private _deshabilitado: boolean;

    constructor (placa_: string, tipoVehiculo_: TVehiculo, deshabilitado_: boolean) {
        this._placa = placa_;
        this.tipoVehiculo = tipoVehiculo_;
        this.deshabilitado = deshabilitado_;
    }

    public deshabilitar (){
        this.deshabilitado = false;
    }
}